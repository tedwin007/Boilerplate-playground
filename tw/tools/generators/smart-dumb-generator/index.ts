import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments, moveFilesToNewDirectory,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import {strings} from '@angular-devkit/core';
import * as fs from "fs";
import * as path from "path";
import {libraryGenerator} from "@nrwl/workspace";


export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, {name: schema.name});
  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
  let configEntityPath = path.join(__dirname, 'jsons', schema.singleItemName + '.json');

  if (fs.existsSync(configEntityPath)) {
    await createEntityFiles(configEntityPath, tree, libraryRoot)
  } else {
    console.info(`No ${configEntityPath} file was found`)
  }
  await createFeatureLib(tree, libraryRoot, schema);
  return () => {
    installPackagesTask(tree);
  };
}


async function createEntityFiles(filePath: string, tree, root) {
  function getFile(): { filename: string; content: object } {
    const content = JSON.parse(fs.readFileSync(filePath).toString());
    const pathArray = filePath.split('/');
    const size = pathArray.length - 1;
    const filename = pathArray[size].split('.json')[0];
    return {content, filename};
  }

  try {
    const {content, filename} = getFile();
    generateFiles(
      tree, // the virtual file system
      joinPathFragments(__dirname, './forms'), // path to the file templates
      root, // destination path of the files
      {
        json: content,
        name: filename,
        classify: (str: string) => strings.classify(str),
      }
    );
    await formatFiles(tree);
    await moveFilesToNewDirectory(tree,root+'/'+filename+'-form',root+'/src/lib/components/form')
  } catch (e) {
    console.error(e);
  }
}

async function createFeatureLib(tree: Tree, libraryRoot: string, schema: any) {
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    libraryRoot, // destination path of the files
    {
      ...schema,
      classify: (str: string) => strings.classify(str),
      singleItemName: schema.singleItemName
    }
  );
  await formatFiles(tree);
}
