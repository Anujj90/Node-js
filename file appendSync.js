//this will add data in a file, without overwriting previous data

const fs = require('fs')
fs.appendFileSync('file.txt','   hey i will not overwrite the data, but just update it next to it' )