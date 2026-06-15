const path = require('path');
const fs = require('fs');


// const findPath = __filename;
// const bsName = path.basename(findPath);
// const dirName = path.dirname(findPath);

// const extName = path.extname(findPath);

// console.log(findPath);
// console.log('Directory name is : ',dirName);
// console.log('base name is : ', bsName);
// console.log('The extention name is : ',extName);

// // 2. Given a file path "./src/utils/helpers.js", use path.basename() to extract the file name.
// const bsName2 = './src/utils/helpers.js';
// console.log(path.basename(bsName2));

// // 3. Use path.join() to create a path like:
// // "/users/john/documents/project"
// const joiningPath = path.join('/users', '/john','/documents', 'project');
// console.log('Joining path is : ',joiningPath);

// // 4.Use path.resolve() to get the absolute path of "./images/logo.png".

// const absPath = './images/logo.png';
// console.log(path.resolve(absPath));

// 1. Create a file named notes.txt and write "Hello Node!" into it.

const createFile = fs.writeFileSync('notes.txt','Hello Node!','utf-8' );
// console.log(createFile);


// 2. Append "More text..." to the same file.
// try{

//     fs.appendFileSync('notes.txt', '\nMore text ....');
//     console.log('Data successfully appended ');
// }
//     catch (err){
// console.log('Error occured ', err);
//     }

try {
    fs.appendFileSync('notes.txt', '\nToday i learned about how to data append in file using node js');
    console.log('Data successfully appended ');

} catch (error) {
    console.log('Error occured ', error);
}
// 3. Read the contents of notes.txt and print them to the console.
const readData = fs.readFileSync('notes.txt', 'utf-8');
console.log(readData);

// 4. Delete a file named temp.txt.
// fs.unlinkSync('notes.txt');

// 5. Check if a file named config.json exists.
const existsCheck = fs.existsSync('notes.txt');

if(existsCheck){
    console.log('File exists ',existsCheck);
}
else{
    console.log('Thefile is not exists')
}

// 6. Create a folder named logs.
// fs.mkdirSync('logs');


fs.mkdir('Assets', (err)=>{
    if(!err){
        console.log('The folder create Successfully');
    }
    else{
        console.log('Error ', err);
    }
});