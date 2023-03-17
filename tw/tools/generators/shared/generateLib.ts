import {libraryGenerator} from "@nrwl/workspace";
import {readProjectConfiguration} from "@nrwl/devkit";

export async function generateLib(tree, name): Promise<{ libraryRoot: string }> {
    await libraryGenerator(tree, {name});
    return {libraryRoot: readProjectConfiguration(tree, name).root}
}