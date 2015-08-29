/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import visit from './visit';
import reduceVisitors from './reduceVisitors';

export default function collect(files, plugins) {
  const visitors = reduceVisitors(plugins);

  return files.reduce((acc, file) => acc.concat(visit(file.ast, visitors)), []);
}
