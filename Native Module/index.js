
// file system module 

const fs = require("fs")

fs.writeFile('massage.txt', 'hello from node update', function err(e){
    if (e) throw e;
    console.log('file written successfully')
})

fs.readFile('massage.txt', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data)

})