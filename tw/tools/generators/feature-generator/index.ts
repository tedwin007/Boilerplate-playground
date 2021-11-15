import {
    addDependenciesToPackageJson,
    formatFiles,
    installPackagesTask,
    readProjectConfiguration,
    Tree
} from '@nrwl/devkit';
import {libraryGenerator} from "@nrwl/workspace";
import {createEntityFiles} from "../entity-generator/utils/createEntityFiles";
import * as fs from "fs";
import * as path from "path";
import {createFeatureLib} from "../smart-dumb-generator";
import {codegen} from "swagger-axios-codegen";

export default async function (tree: Tree, schema: any) {
    await libraryGenerator(tree, {name: schema.name});
    const libraryRoot: string = readProjectConfiguration(tree, schema.name).root;
    const openAPISchema = fs.readFileSync(path.join(__dirname, 'jsons', "swagger.json"), "utf-8");
    await createEntityFiles(schema.name, tree, libraryRoot, {swaggerData: JSON.parse(openAPISchema)})
    await createEntityFiles(schema.name, tree, libraryRoot, {...schema,swaggerData: JSON.parse(openAPISchema),},path.join('..','..','services-generators','files'))
    await createEntityFiles(schema.name, tree, libraryRoot, {...schema,swaggerData: JSON.parse(openAPISchema),},path.join('..','..','services-generators','files'))
    await createFeatureLib( tree, libraryRoot,schema)

    await formatFiles(tree);
    return () => {
        addDependenciesToPackageJson(tree, {'ag-grid-community': 'latest'}, {});
        installPackagesTask(tree);
        fs.writeFileSync(path.join(libraryRoot, 'swagger.json'), openAPISchema, {encoding: 'utf8'});
         codegen({
            serviceNameSuffix: 'Model',
            enumNamePrefix: 'Enum',
            methodNameMode: 'operationId',
            outputDir: path.join(process.cwd(), libraryRoot, 'src', 'lib', 'generated'),
            fileName: schema.name+'.generated.models.ts',
            useStaticMethod: true,
            useCustomerRequestInstance: true,
            sharedServiceOptions: true,
            strictNullChecks: true,
            modelMode: 'class',
            generateValidationModel: true,
            source: JSON.parse(openAPISchema)
        })
    };
}
