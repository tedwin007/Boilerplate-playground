import {installPackagesTask, Tree,} from '@nrwl/devkit';
import {readSwaggerFile} from "../shared/readSwaggerFile";
import * as path from "path";
import {generateLib} from "../shared/generateLib";
import {localFilesGenerator} from "../shared/localFilesGenerator";

export default async function (tree: Tree, schema: any) {
    const {swaggerData} = readSwaggerFile(path.join(__dirname, 'jsons', "swagger.json"))
    const {libraryRoot} = await generateLib(tree, schema.name);
    await localFilesGenerator(schema.name, tree, libraryRoot, {
        ...schema, swaggerData, singleItemName: schema.singleItemName
    });
    return () => {
        installPackagesTask(tree);
    };
}

