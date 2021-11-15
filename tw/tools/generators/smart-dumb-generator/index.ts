import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import {strings} from '@angular-devkit/core';
import {libraryGenerator} from "@nrwl/workspace";

export default async function (tree: Tree, schema: any,standAlone:boolean = true) {
  if (standAlone){
    await libraryGenerator(tree, {name: schema.name});
  }
  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
  await createFeatureLib(tree, libraryRoot, schema);
  return () => {
    installPackagesTask(tree);
  };
}

export async function createFeatureLib(tree: Tree, libraryRoot: string, schema: any) {
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
