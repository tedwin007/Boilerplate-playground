import {
  addDependenciesToPackageJson,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import * as path from "path";
import {libraryGenerator} from "@nrwl/workspace";
import {createEntityFiles} from "./utils/createEntityFiles";
import {buildInMemoryJson} from "./utils/buildInMemoryJson";

export default async function (tree: Tree, schema: any): Promise<() => void> {
  await libraryGenerator(tree, {name: schema.name});
  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
  const configEntityPath = path.join(__dirname, 'jsons', schema.name + '.json');
  let json = buildInMemoryJson();
  await createEntityFiles(configEntityPath, tree, libraryRoot, json);
  await formatFiles(tree);
  return () => {
    addDependenciesToPackageJson(tree, { 'ag-grid-community': 'latest' }, { });
    installPackagesTask(tree);
  };
}

