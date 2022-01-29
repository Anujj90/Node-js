//child process is a node module used to create sub process within a script
//you can perform different tasks with your script
//we first have to require before importing

const cp = require('child_process')//we used const because we don't want any changes further in it
//console.log('open calculator')
//cp.execSync('start calc')
//open specific website
// cp.execSync('start brave')//"start" is mandatory for third party installed applications
// cp.execSync('start brave https://www.google.com')

//by using child_process we can run code from other file by executing it on another file
const output = cp.execSync('node test.js')