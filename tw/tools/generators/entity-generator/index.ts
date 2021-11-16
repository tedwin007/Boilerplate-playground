import {addDependenciesToPackageJson, Tree,} from '@nrwl/devkit';
import * as path from "path";
import {localFilesGenerator} from "../shared/localFilesGenerator";
import {postGenerateFlow} from "../shared/postGenerateFlow";
import {readSwaggerFile} from "../shared/readSwaggerFile";
import {generateLib} from "../shared/generateLib";

export default async function (tree: Tree, schema: any): Promise<() => void> {
    const {swaggerData} = readSwaggerFile(path.join(__dirname, 'jsons', "swagger.json"))
    const {libraryRoot} = await generateLib(tree, schema.name);
    await localFilesGenerator(schema.name, tree, libraryRoot, {...schema, swaggerData});
    return async () => {
        await addDependenciesToPackageJson(tree, {'ag-grid-community': 'latest'}, {});
        await postGenerateFlow(tree, libraryRoot, swaggerData)
    }
}