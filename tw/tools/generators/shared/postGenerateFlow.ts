import {addDependenciesToPackageJson, formatFiles, installPackagesTask} from "@nrwl/devkit";
import * as fs from "fs";
import * as path from "path";

export async function postGenerateFlow(tree, libraryRoot, swaggerData?: any) {
    await formatFiles(tree);
    await addDependenciesToPackageJson(tree, {'ag-grid-community': 'latest'}, {});
    await installPackagesTask(tree);
    if (swaggerData) {
        fs.writeFileSync(path.join(libraryRoot, 'swagger.json'), JSON.stringify(swaggerData), {encoding: 'utf8'});
    }
}