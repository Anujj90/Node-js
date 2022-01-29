const figlet = require('figlet')
//callback function will be taught in upcoming so no need to worry bro !
figlet("Anuj ji !!",function(err,data){
    if(err){
        console.log('something went wrong..');
        console.log(err);
        return;
    }
    console.log(data)
});

