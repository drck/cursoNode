const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());

app.post('/name_service',(req,res)=>{
let nombre1=req.query.nombre;
	console.log("se recibio"+nombre1);
	res.send(nombre1);
});

app.listen(3001,function(){
console.log('Name Service started')
});
