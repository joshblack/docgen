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

async function fileIsDoc(acc, file) {
  const { path } = file;
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

export default async function parseFiles(path) {
  const files = Promise.all(getFilesFromPath(path).reduce(fileIsDoc, []));

  return files;
}

