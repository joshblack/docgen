/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

// TODO
// Incomplete File

import path from 'path';
import parseFiles from './parseFiles';

parseFiles(path.resolve(__dirname, '../test/fixtures/code'));
  // .then((parsedFiles) => collect(parsedFiles, [p]));
  // .then((parseFiles) => console.log(JSON.stringify(parseFiles)));
