process.stdin.setEncoding('utf8');
process.stdin.on('readable',()=>{
let chunk;
while((chunk=process.stdin.read())!==null){
	process.stdout.write(`data ${chunk}`);
}
});

//send signal end with contrl+d
process.stdin.on(`end`,()=>{
process.stdout.write('end');
});
