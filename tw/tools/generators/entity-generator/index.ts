import {addDependenciesToPackageJson, installPackagesTask, readProjectConfiguration, Tree,} from '@nrwl/devkit';
import * as path from "path";
import {libraryGenerator} from "@nrwl/workspace";
import {createEntityFiles} from "./utils/createEntityFiles";
import * as fs from "fs";

export default async function (tree: Tree, schema: any,standAlone:boolean = true): Promise<() => void> {
    let openAPISchema;

    let swaggerFilePath = path.join(__dirname, 'jsons', "swagger.json");
    if (!fs.existsSync(swaggerFilePath)) return;
    if (standAlone) {
        await libraryGenerator(tree, {name: schema.name});
    }
    const libraryRoot: string = readProjectConfiguration(tree, schema.name).root;
    openAPISchema = fs.readFileSync(swaggerFilePath, "utf-8");
    await createEntityFiles(schema.name, tree, libraryRoot, {swaggerData: JSON.parse(openAPISchema)})

    return async () => {
        await addDependenciesToPackageJson(tree, {'ag-grid-community': 'latest'}, {});
        await installPackagesTask(tree);
        fs.writeFileSync(path.join(libraryRoot, 'swagger.json'), openAPISchema, {encoding: 'utf8'});
    }
}