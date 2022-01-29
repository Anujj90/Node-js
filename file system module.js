//file system module
const fs = require('fs')//fs is official name of file system module
//1. we will be reading, writing, updating and deleting files

//to read from a file, there should be  that file present, hence we create a file, file.txt

let content = fs.readFileSync('file.txt')//we have to use readfilesync and not readfile
console.log('content '+  content)

//when we get something in binary, we have to concat with a string

//to write on a file from one file to another
fs.writeFileSync("file.txt",'hello ji')
//if we want to write something on a file, and that file is still not been created yet, even then it will automatically create a file and will add the data we want to.
//it expects two things, first is that, "in which file data is to be written", "data to be written"
fs.writeFileSync("I am the new file created automatically.txt",'heyyy! look at me')
//*Here if we add data to the same existing file, and if there is previous data present in it, it will overwrite the old data completely */

