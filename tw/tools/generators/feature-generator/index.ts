import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import * as entityGenerator from './../entity-generator'
import * as serviceGenerator from './../entity-generator'
import * as smartDumbGenerator from './../entity-generator'

export default async function (tree: Tree, schema: any) {
  await entityGenerator.default(tree, { name: schema.name });
  await serviceGenerator.default(tree, { name: schema.name });
  await smartDumbGenerator.default(tree, { name: schema.name })
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
