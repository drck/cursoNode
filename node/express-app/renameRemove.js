var express=require('express')
var app=express();
const fs=require('fs');


app.post('/createFile',function(req,resp){
        console.log("create file..")
	createFile(req.query.nameFile,req.query.text);
        resp.send(200,'Create File Succsesfully:'+ req.query.nameFile);
});

app.delete('/deleteFile',function(req,resp){
	console.log('Delete File', req.query.namefile);
	deleteFile(req.query.nameFile);
	resp.send(200,'File Deleted:'+req.query.namefile);
});


app.put('/renameFile',function(req,resp){
        console.log("Rename File"+req.query.oldFile);
        renameFile(req.query.newFile,req.query.oldFile);
        resp.send(200,'Rename File'+req.query.newFile);
});


app.put('/modifyFile',function(req,resp){
	console.log("Modify File"+req.query.nameFile);
	modifyFile(req.query.nameFile,req.query.text);
	resp.send(200,'Modify File'+req.query.nameFile);
});



app.get('/getFile',function(req,res){
        console.log("Get File",req.query.nameFile)
	
readFile(req.query.nameFile,res);
});

var server =app.listen(3000,function(){
	console.log("Express started successfully");
});


function readFile(nameFile,res){
	fs.readFile('/tmp/'+nameFile,function(err,fileContent){
	if(err){
	throw err;
	}
	console.log('fileContent:',fileContent.toString());
	res.send(fileContent.toString());
	});
}

function createFile(nameFile,text){
	fs.writeFile("/tmp/"+nameFile,text,function(err){
	if(err){
	return console.log(err);
	}
	console.log('File /tmp/namefile saved!');
	});
}


function modifyFile(nameFile,text){
	fs.appendFile('/tmp/'+nameFile,text,function(err){
	if(err)
	throw err;
	console.log('Appended text to file /tmp/test!');
	});
}


function renameFile(newFile,oldFile){
	//var fs=require('fs');
	fs.rename('/tmp/'+oldFile,'/tmp/'+newFile,function(err){
	if(err)
	{throw err;}
	console.log('File renamed!');
	});
}


function deleteFile(nameFile){
	//const fs =require('fs');
	fs.unlink('/tmp/'+nameFile,(err)=>{
	if(err)
	throw err;
	console.log('file removed')
	});
}

