/**
 * Copyright (c) 2015 Josh Black
 * All Rights Reserved.
 *
 */

import Promise from 'bluebird';
import { parse } from 'babel';
import getFilesFromPath from './getFilesFromPath';

const readFile = Promise.promisify(require('fs').readFile);
const DOC_REGEXP = /\* \@doc ?(\S+)?\r?\n/;

/**
 * Check if a given file has included the `@doc` pragma.
 *
 * @param  {object} acc  Accumulated object from the `reduce` in parseFiles
 * @param  {object} file High level information about the file
 * @return {object}      Returned object with possible information about the
 *                       file if it included the `@doc` pragma
 */
async function fileIsDoc(acc, file) {
  const prev = await acc;

  try {
    const source = await readFile(file.path, 'utf8');
    const matches = source.match(DOC_REGEXP);

    if (matches) {
      return prev.concat({
        ...file,
        source,

        // 'File' needed because of Issue #2270 in babel, `traverse` is
        // technically an internal, unsupported API.
        // See: https://github.com/babel/babel/issues/2270
        ast: { type: 'File', program: parse(source) },

        rawDoc: matches[0],
        docSections: matches[1].split('/')
      });
    }

    return prev;
  } catch (e) {
    throw new Error(`Exception: ${e}`);
  }
}

/**
 * Find meta information from all files in a given path that have included the
 * `@doc` pragma.
 *
 * @param  {string} path Path to the folder containing the files
 * @return {Array<Object>} Collected meta information about the files
 */
export default async function parseFiles(path) {
  return Promise.all(getFilesFromPath(path).reduce(fileIsDoc, []));
}
