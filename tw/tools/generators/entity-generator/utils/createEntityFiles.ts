import {generateFiles, joinPathFragments} from "@nrwl/devkit";
import {strings} from "@angular-devkit/core";

export async function createEntityFiles(fileName, tree, root, data: any, grid: false | object): Promise<void> {
  try {
    let substitutions = {
      json: data,
      name: fileName,
      classify: (str: string) => strings.classify(str),
      grid
    };

    console.log(grid)
    generateFiles(tree, joinPathFragments(__dirname, './../files'), root, substitutions);
  } catch (e) {
    console.error(e);
  }


}

