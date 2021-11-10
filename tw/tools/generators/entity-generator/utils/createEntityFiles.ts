import {generateFiles, joinPathFragments} from "@nrwl/devkit";
import {strings} from "@angular-devkit/core";
import * as fs from "fs";

export async function createEntityFiles(filePath: string, tree, root, inMemoryJson?: any): Promise<void> {
  try {
    let data: any;
    let fileName: string;
    const {content, filename} = getFile();
    data = !inMemoryJson ? content : inMemoryJson;
    fileName = !inMemoryJson ? filename : 'someMockName';
    generateFiles(tree, joinPathFragments(__dirname, './files'), root, {
      json: data,
      name: fileName,
      classify: (str: string) => strings.classify(str)
    });
  } catch (e) {
    console.error(e);
  }

  function getFile(): { filename: string; content: object } {
    const content = JSON.parse(fs.readFileSync(filePath).toString());
    const pathArray = filePath.split('/');
    const size = pathArray.length - 1;
    const filename = pathArray[size].split('.json')[0];
    return {content, filename};
  }
}
