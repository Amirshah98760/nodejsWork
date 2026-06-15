const { dir } = require('console');
const path = require('path');  //import path module 

const joinPath = path.join('users','john', 'documents', 'file.txt');  //joining paths 
console.log(joinPath);

const resPath = path.resolve('projects', 'nodejs', 'app.js'); //absolute path
console.log(resPath);

const basePath = path.basename('/home/john/docs/report.pdf', '.pdf');
console.log(basePath);

const dirName = path.dirname('C:\\Users\\John\\Desktop\\file.txt');
console.log(dirName);


const extName = path.extname('index.html');
console.log(extName);
console.log(path.extname('archive.tar.gz'));

const parsePath = path.parse('/users/john/projects/node/server.js');
console.log(parsePath);

console.log('Formatting path',path.format(parsePath));

function getFileInfo(fileName , folderPath){
    const jPath = path.join(folderPath, fileName);

    const absoPath = path.resolve(folderPath, fileName);
    const extenName = path.extname(fileName);

    return {
        jPath,
         absoPath,
          extName
    };
}

console.log(getFileInfo('app.js','C:\\Users\\John\\Desktop'));

const savePath = 'C://Users//John//Desktop//file.txt';

console.log('Normalize path = ',path.normalize(savePath));