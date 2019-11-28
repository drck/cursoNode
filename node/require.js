const fs =require('fs');
const os =require('os');

var path= process.argv[2];
console.log(path);
if(path!=null){
	fs.readdir(path,(err,files)=>{
		files.forEach(file=>{
		console.log(file);
		})
	})
}
