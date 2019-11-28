const winston =require('winston');
const express =require('express');
const app= express();
const port=3000;

const logger =winston.createLogger({
	transports:[
	new winston.transports.Console()
	]
});

const handler =(func)=>(req,resp)=>{
	try{
		logger.info('Server.handler.begun');
		fun(req,resp,logger);
	}catch(e){
		logger.info("Server.handler.failed");
		resp.send('Oh no, something did not go well');
	}
};

app.get('/success',handler((req,res,log)=>{
	log.info("All ok");
	res.send("Yay!");
}));

app.get('/error',handler((req,res)=>{
throw new Error('Doh!');
}));

app.listen(port,()=>console.log(`Example app listening on port ${port}!`))

