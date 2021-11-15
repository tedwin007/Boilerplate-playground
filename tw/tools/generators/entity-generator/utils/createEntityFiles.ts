import {formatFiles, generateFiles, joinPathFragments} from "@nrwl/devkit";
import {strings} from "@angular-devkit/core";
import {dasherize} from "@nrwl/workspace/src/utils/strings";

export async function createEntityFiles(fileName, tree, root, subs: false | object): Promise<void> {
  try {
    let substitutions = {
      name: fileName,
      dirPath:__dirname,
      classify: (str: string) => strings.classify(str),
      dash:(str:string)=>dasherize(str),
      ...subs
    };
    await generateFiles(tree, joinPathFragments(__dirname, './../files'), root, substitutions);
    await formatFiles(tree);

  } catch (e) {
    console.error(e);
  }
}

