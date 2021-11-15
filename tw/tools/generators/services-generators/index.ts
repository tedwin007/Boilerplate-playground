import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import {strings} from '@angular-devkit/core';
import {libraryGenerator} from "@nrwl/workspace";
import * as path from "path";
import * as fs from "fs";
const {codegen} = require('swagger-axios-codegen')

export default async function (tree: Tree, schema: any) {
  let openAPISchema;

  await libraryGenerator(tree, {name: schema.name});
  let swaggerFilePath = path.join(__dirname, 'jsons', "swagger.json");
  if (!fs.existsSync(swaggerFilePath)) {
    return;
  }

  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
  openAPISchema = fs.readFileSync(swaggerFilePath, "utf-8");
  let parseElement = JSON.parse(openAPISchema);
  // console.log(JSON.stringify(parseElement, undefined, 4));
  await createFeatureLib(tree, libraryRoot, {...schema, swaggerData: parseElement});

  return async () => {
    installPackagesTask(tree);
    await codegen({
      serviceNameSuffix: 'Model',
      enumNamePrefix: 'Enum',
      methodNameMode: 'operationId',
      outputDir: path.join(process.cwd(), libraryRoot, 'src', 'lib', 'generated'),
      fileName: schema.name + '.generated.ts',
      useStaticMethod: true,
      useCustomerRequestInstance: true,
      sharedServiceOptions: true,
      strictNullChecks: true,
      modelMode: 'class',
      generateValidationModel: true,
      source: JSON.parse(openAPISchema)
    })
    fs.writeFileSync(path.join(libraryRoot, 'swagger.json'), openAPISchema, {encoding: 'utf8'});
  };
}

async function createFeatureLib(tree: Tree, libraryRoot: string, schema: any) {
  generateFiles(
    tree, joinPathFragments(__dirname, './files'), libraryRoot,
    {
      ...schema,
      classify: (str: string) => strings.classify(str),
      singleItemName: schema.singleItemName
    }
  );
  await formatFiles(tree);
}
