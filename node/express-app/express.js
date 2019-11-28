var express =require('express')
var app=express();
app.get('/',function (req,resp){
console.log("Get request homepage");
res.send('Get request homepage');
});

app.post('/',function(req,resp){
	console.log("Post request homepage")
	res.send('Post request homepage');
});

app.delete('/del_user',function(req,res){
console.log('Delete request /del_usuario');
});

app.get('list_user',function(req,resp){
console.log("Get Request /list_user");
res.send('Get request /list_user');
});

app.get('/ab*cd',function(req,res){
console.log("Get Request /ab*dc" );
res.send('Get request /ab*cd:');
console.log("UserId:",req.query.idUser);

});


app.get('/:name/ab*cd',function(req,res){
console.log("Get Request /ab*dc" );
res.send('Get request /ab*cd: ');
console.log("name:",req.params.name);

});



var server =app.listen(3000,function(){
console.log("Express started successfully");
});
