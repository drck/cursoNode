const fs=require('fs');
fs.writeFile("/tmp/test","Hello world",function(err){
if(err){
return console.log(err);
}
console.log('File /tmp/test saved!');
});
fs.appendFile('/tmp/test','message to append',function(err){
if(err)
throw err;
console.log('Appended text to file /tmp/test!');
});

//var fs=require('fs');
fs.rename('/tmp/test','tmp/renamedtest',function(err){
if(err)
{throw err;}
console.log('File renamed!');
});

//const fs =require('fs');
fs.unlink('/tmp/renamedtest',(err)=>{
if(err)
throw err;
console.log('file removed')
})
