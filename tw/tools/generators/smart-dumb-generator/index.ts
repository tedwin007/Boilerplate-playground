
import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace';
import { strings } from '@angular-devkit/core';

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, { name: schema.name });
  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
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
  return () => {
    installPackagesTask(tree);
  };
}
