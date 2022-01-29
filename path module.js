const fs = require('fs')
const path = require('path')

//copying files
//we can copy a file into a folder, and path module helps us to get base name from the path
//source file, destination path
let srcFilePath = 'D:\\web dev\\Node js\\Directory\\hello'
let destinationPath = 'D:\\web dev\\Node js\\Directory\\Folder.js\\'

let tobecopiedFilename = path.basename(srcFilePath)
console.log(tobecopiedFilename)
//path.join expects destination path and source path, 


let destPath = path.join(destinationPath, tobecopiedFilename)
console.log(destPath)

fs.copyFileSync(srcFilePath,destPath)
console.log('done')

//we can get extension of a file from it's path by path.extname('path')
let ext = path.extname('D:\\web dev\\Node js\\  file.txt')
console.log(ext)

//some more properties

console.log(__dirname) // gets you path of current directory of the file
console.log(__filename) // gets you path of the file you are in