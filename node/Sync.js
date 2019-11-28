var fs=require('fs');
var dir='/tmp/mydir';

if(!fs.existsSync(dir)){
fs.mkdirSync(dir);
}

fs.raname('/tmp/mydir','tmp/my-renamed-dir',function(err){
if(err)
throw err;
console.log('renamed complete');
});

fs.mkdir('tmp/my-renamed-dir',(err)=>{
if(err)
throw err;
console.log('succesfuly delete directory');
});
