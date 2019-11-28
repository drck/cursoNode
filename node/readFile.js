var fs =require('fs');
fs.readFile('/etc/passwdd',function(err,fileContent){
if(err){
throw err;
}
console.log('fileContent:',fileContent.toString());
})
