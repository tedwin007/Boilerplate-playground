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
    path.join('tools/generators', options.name),
    options
  );
  if (!options.skipFormat) {
    await formatFiles(tree);
  }
}
