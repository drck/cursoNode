var readline= require('readline');
var rl =readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

rl.question("What do you think of node.js",
function(answer){
console.log("THank you for your valueable feedback:", answer);
rl.close();

});
