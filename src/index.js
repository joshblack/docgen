/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import path from 'path';
import parseFiles from './parseFiles';

var util = require('util');

// import { parse, traverse } from 'babel';

// traverse(ast, {
//   JSXElement(node) {
//     console.log(node);
//   }
// });

// const p = new Plugin('foo', {
//   JSXElement(node) {
//     console.log(node);
//   }
// });

parseFiles(path.resolve(__dirname, '../test/fixtures/components'))
  // .then((parsedFiles) => collect(parsedFiles, [p]));
  .then((parseFiles) => console.log(JSON.stringify(parseFiles)));
