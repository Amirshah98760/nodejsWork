// const path = require('path');

// const fileName = path.basename("/home/user/docs/file.txt");
// console.log(fileName)

// console.log(path.dirname(fileName));
// console.log(path.extname(fileName));

// console.log(__dirname);
// console.log(__filename);

// const joinedPath = path.join(__dirname, 'amirshah', 'file.txt');
// console.log(joinedPath);

// const joinedPath2 = path.join('/amirshah', 'file.txt');
// console.log('Path 2:',joinedPath2);

// const ext = path.extname('file.html')
// console.log(ext);


// const resPath = path.resolve('index.html');
// console.log(resPath);

// console.log(path.relative('/users/docs/file.txt', '/users/images/photo.jpg'));
const fs = require('fs');

// console.log( fs.writeFileSync('hello.txt', 'Hello, World!', 'utf-8'));

fs.writeFile('hello1.txt', 'I write the text in file ', { encoding: 'utf-8' }, (err) => {
    if (!err) {
        console.log('File written successfully');
    } else {
        console.log('Error occurred:', err);
    }
});

