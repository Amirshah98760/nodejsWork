import fs from 'fs';
import os from 'os'

const createFile = fs.writeFileSync('index.txt', 'Hi today we are learning about how to create file using node js', 'utf-8');

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());

