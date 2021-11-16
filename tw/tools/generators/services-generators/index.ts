import {installPackagesTask, Tree,} from '@nrwl/devkit';
import * as path from "path";
import {localFilesGenerator} from "../shared/localFilesGenerator";
import {readSwaggerFile} from "../shared/readSwaggerFile";
import {saveSwaggerFile} from "../shared/saveSwaggerFile";
import {generateSwaggerModels} from "../shared/generateSwaggerModels";
import {generateLib} from "../shared/generateLib";

export default async function (tree: Tree, schema: any) {
    const {swaggerData} = readSwaggerFile(path.join(__dirname, 'jsons', "swagger.json"))
    const {libraryRoot} = await generateLib(tree, schema.name);
    await localFilesGenerator(schema.name, tree, libraryRoot, {...schema, swaggerData});
    return async () => {
        installPackagesTask(tree);
        await generateSwaggerModels(libraryRoot, schema.name, swaggerData)
        await saveSwaggerFile(libraryRoot, swaggerData);
    };
}

