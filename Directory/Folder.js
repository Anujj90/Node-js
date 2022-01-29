// //creating a directory
 //mkdirSync method is used to create a new directory or folder
const fs = require('fs')
 const { type } = require('os')
fs.mkdirSync("myDirectory")
// //we cannot run this code twice, bcoz it won't create another folder which is already been created.
// //deleting a directory
// //rmdirSync - remove directory Sync
 fs.rmdirSync('myDirectory')
 console.log("directory removed")

// //to check whether a directory or a file exists or not
// //existsSync - it returns true or false
// //it works for both files and directory
let doesExist= fs.existsSync('file.txt')
console.log(doesExist)

// //to know stats of directory like basic information of it, like when was it created etc
// //lstatSync method can be used to look stats of a directory
 let statsOfDirectory = fs.lstatSync('Directory')
console.log(statsOfDirectory)

// //there's a method which can be used along with this, i.e.
// //'isFile'- by looking the stats of the provided statsOfDirectory, it will check whether the stats belong to a directory or a file type, it will give true or false accordingly.//
// //similar is a method 'isDirectory()'

 console.log('isFile ?',statsOfDirectory.isFile())
 console.log('is Directory ?' , statsOfDirectory.isDirectory())

//readdirSync ----- gives us the content i.e. name of files present in directory
//So first we have to give path of that directory,
//and we have to put double slashes in path, because node don't recognise single slash
let folderpath= "D:\\web dev\\Node js\\Directory"
let foldercontent = fs.readdirSync(folderpath)
console.log('directory content' + foldercontent)
