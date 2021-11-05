import { Tree, formatFiles, generateFiles } from '@nrwl/devkit';
import * as path from 'path';

interface Schema {
  name: string;
  skipFormat: boolean;
}

export default async function (tree: Tree, options: Schema) {
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    path.join('tools/generators', schema.name),
    options
  );
  if (!schema.skipFormat) {
    await formatFiles(tree);
  }
}
