import {formatFiles, generateFiles, joinPathFragments} from "@nrwl/devkit";
import {strings} from "@angular-devkit/core";
import {dasherize} from "@nrwl/workspace/src/utils/strings";

export async function createEntityFiles(fileName, tree, root, subs: false | object,pathToFiles='./../files'): Promise<void> {
  try {
    let substitutions = {
      name: fileName,
      dirPath:__dirname,
      classify: (str: string) => strings.classify(str),
      dash:(str:string)=>dasherize(str),
      ...subs
    };
    await generateFiles(tree, joinPathFragments(__dirname, pathToFiles), root, substitutions);
    await formatFiles(tree);

  } catch (e) {
    console.error(e);
  }
}

