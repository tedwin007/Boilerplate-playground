import {formatFiles, generateFiles, joinPathFragments, Tree} from "@nrwl/devkit";
import {strings} from "@angular-devkit/core";
import {dasherize,camelize} from "@nrwl/workspace/src/utils/strings";

export async function localFilesGenerator(name: string, tree: Tree, root: string, subs: false | object, pathToFiles = './../files'): Promise<void> {
    try {
        const singleItemFileName = (subs && 'singleItemName' in subs) ? dasherize(subs['singleItemName']).trim() : undefined;
        await generateFiles(tree, joinPathFragments(__dirname, pathToFiles), root,
            {
                singleItemFileName,
                camelize,
                dasherize,
                fileName: dasherize(name).trim(),
                name,
                dirPath: __dirname,
                classify: (str: string) => strings.classify(str),
                ...subs
            });
        await formatFiles(tree);
    } catch (e) {
        console.error(e);
    }
}

