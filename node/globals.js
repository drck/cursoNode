console.log(__dirname);
console.log(__filename);
process.on('beforeExit',(code)=>{
console.log('Process beforeExit event with code',code);
});

process.on('exit',(code)=>{
console.log('Process exit event whit code:',code);
});

console.log('This message is displayed first.');

function myFunction(arg){
	console.log(`arg was => ${arg}`);
}

const timeoutObj=setTimeout(myFunction, 1500, 'Hellow NOde.js');

const intervalObj=function intervalFunc(){
console.log('Cant stop me now');
}

//setInterval(intervalFunc, 1500);

console.log('Before inmediate');

const immediateObj=setImmediate((arg)=>{
	console.log(`executing inmediate: ${arg}`);
},'so inmediate');

console.log('after inmediate');

clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);

