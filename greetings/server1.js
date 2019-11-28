const express=require('express');
const request=require('request');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());

app.get("/greetings",(req,res)=>{
	let _nombre=req.query.nombre;
	console.log("se recibio nombre:"+_nombre);
	request.post("http//localhost:3001/name_service?nombre="+_nombre,{json:{nombre:"_nombre"}},function(err,resp,body){
		console.log("resp:"+resp)
		res.send("hello"+body);
		});
});


app.listen(3000,function(){
console.log('Express started....');
});


