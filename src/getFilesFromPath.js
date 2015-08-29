import fs from 'fs';
import path from 'path';

/**
 * Visit all the children in a folder and record their name, parent folders,
 * and path.
 *
 * @param  {string}    folder   Folder path
 * @param  {string}    parents  Pass in parents by spreading the array
 * @return {array}              Array of traversed files
 */
export default function getFilesFromPath(folder, ...parents) {
  return fs.readdirSync(folder).reduce((p, file) => {
    const filePath = path.join(folder, file);

    return fs.lstatSync(filePath).isDirectory()
      ? p.concat(traverse(filePath, ...parents.concat([file])))
      : p.concat([{ name: file, parents, path: filePath }]);
  }, []);
}
