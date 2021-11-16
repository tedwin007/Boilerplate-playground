import {addDependenciesToPackageJson, Tree} from '@nrwl/devkit';
import {localFilesGenerator} from "../shared/localFilesGenerator";
import * as path from "path";
import {postGenerateFlow} from "../shared/postGenerateFlow";
import {generateLib} from "../shared/generateLib";
import {readSwaggerFile} from "../shared/readSwaggerFile";

export default async function (tree: Tree, schema: any) {
    const swaggerFilePath = path.join(__dirname, 'jsons', "swagger.json");
    const {swaggerData} = readSwaggerFile(swaggerFilePath);
    const {libraryRoot} = await generateLib(tree, schema.name);
    const dataTranspiler = {...schema, swaggerData};

    const serviceGeneratorTemplate = path.join('..', 'entity-generator', 'files');
    const entityGeneratorTemplate = path.join('..', 'services-generators', 'files');
    const featureGeneratorTemplate = path.join('..', 'smart-dumb-generator', 'files');

    await localFilesGenerator(schema.name, tree, libraryRoot, dataTranspiler, serviceGeneratorTemplate);
    await localFilesGenerator(schema.name, tree, libraryRoot, dataTranspiler, entityGeneratorTemplate);
    await localFilesGenerator(schema.name, tree, libraryRoot, dataTranspiler, featureGeneratorTemplate);

    return async () => {
        addDependenciesToPackageJson(tree, {'ag-grid-community': 'latest'}, {});
        await postGenerateFlow(tree, libraryRoot, swaggerData)
    };
}
