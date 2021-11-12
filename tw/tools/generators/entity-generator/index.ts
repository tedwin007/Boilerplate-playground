import {
  addDependenciesToPackageJson,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import * as path from "path";
import {deleteFile, libraryGenerator} from "@nrwl/workspace";
import {createEntityFiles} from "./utils/createEntityFiles";
import * as fs from "fs";

export default async function (tree: Tree, schema: any): Promise<() => void> {
  const filePath = path.join(__dirname, 'jsons', `${schema.name}.json`);
  const gridFilePath = path.join(__dirname, 'jsons', `${schema.grid}.json`);
  const grid = fs.existsSync(gridFilePath) ? getFile(gridFilePath).content : false;

  await libraryGenerator(tree, {name: schema.name});
  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
  const {content, filename} = getFileContent(filePath);
  await createEntityFiles(filename, tree, libraryRoot, content, grid);
  await formatFiles(tree);

  return () => {
    !!grid ?
      addDependenciesToPackageJson(tree, {'ag-grid-community': 'latest'}, {}) :
      deleteFile(path.join(libraryRoot, `${schema.grid}-grid-view`));
    installPackagesTask(tree);
  };
}

const getFileContent = (filePath: string): { filename: string; content: object } => {
  const {content, filename} = getFile(filePath);
  return {content, filename};
}

export function getFile(filePath): { filename: string; content: object } {
  const content = JSON.parse(fs.readFileSync(filePath).toString());
  const pathArray = filePath.split('/');
  const size = pathArray.length - 1;
  const filename = pathArray[size].split('.json')[0];
  return {content, filename};
}
