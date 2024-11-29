const fs = require('fs');

// writefile
//appendfile
// unlink 
// copyfile 
// rename
fs.writeFile('hey.txt', 'hello how are you', function (err) {
    if(err) console.error(err)
        else console.log("Done");
        
})

fs.appendFile('hey.txt', ' i am fine whats about u', function (err) {
    if(err) console.error(err)
        else console.log("Done");
        
})

fs.rename('hey.txt', 'hello.txt', function (err) {
    if(err) console.error(err)
        else console.log("Renamed successfully");
        
})
fs.copyFile('hello.txt','./copy/hey.txt', function (err) {
    if(err) console.error(err)
        else console.log("file copied ");
        
})
fs.unlink('hi.txt', function (err) {
    if(err) console.error(err)
        else console.log("file deleted  ");
})

fs.rmdir('./copy1' , {recursive:true} ,function (err) {
    if(err) console.error(err)
        else console.log("directory removed");
})