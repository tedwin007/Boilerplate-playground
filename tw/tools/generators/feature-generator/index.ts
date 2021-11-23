import {addDependenciesToPackageJson, formatFiles, Tree} from '@nrwl/devkit';
import * as path from "path";
import {readSwaggerFile} from "../shared/readSwaggerFile";
import {generateLib} from "../shared/generateLib";
import {postGenerateFlow} from "../shared/postGenerateFlow";
import {localFilesGenerator} from "../shared/localFilesGenerator";
import {TemplateManger} from "../shared/ejs/templates/template-manger";

export default async function (tree: Tree, schema: any) {
    const {libraryRoot} = await generateLib(tree, schema.name);
    const swaggerFilePath = path.join(__dirname, 'jsons', "swagger.json");
    const {swaggerData} = readSwaggerFile(swaggerFilePath);
    const dataTranspiler = {...schema, swaggerData,};
    const serviceGeneratorTemplate = path.join('..', 'entity-generator', 'files');
    const entityGeneratorTemplate = path.join('..', 'services-generators', 'files');

    await localFilesGenerator(schema.name, tree, libraryRoot, dataTranspiler, serviceGeneratorTemplate);
    await localFilesGenerator(schema.name, tree, libraryRoot, dataTranspiler, entityGeneratorTemplate);

    return async () => {
        addDependenciesToPackageJson(tree, {'ag-grid-community': 'latest'}, {});

        TemplateManger
            .makeClassFiles(libraryRoot, {name: schema.name, ...dataTranspiler})
            .makeInterfaceFiles(libraryRoot, {name: schema.name, ...dataTranspiler})
            .makeFormFiles(libraryRoot, {name: schema.name, ...dataTranspiler})
        await postGenerateFlow(tree, libraryRoot, swaggerData);
        await formatFiles(tree);
    };
}
