const path = require('path');


const fullPath = path.join('folder','subFolder','file.txt');
console.log(fullPath);

console.log('the basename of path is ', path.basename(fullPath));
console.log('the extension of path is ', path.extname(fullPath));
console.log('the directory name  of path is ', path.dirname(fullPath));

const absPath = path.resolve('folder1', 'subfolder1', 'file2.txt');
console.log(absPath);

const relPath = path.relative('/subfolder1', 'file2.txt');
console.log(relPath);


const parsed = path.parse('/users/john/docs/file.txt');
console.log(parsed);

console.log(parsed.dir);
console.log(parsed.base);
console.log(parsed.ext);

console.log('path coverted from json to raw : ', path.format(parsed));