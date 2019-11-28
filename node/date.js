var http= require('http');
var myModule2=require('mymodule');
var myMOdule1=require('mymodule');
console.log(myModule2.myDateTime());
function print(){
console.log('myModule1.myDateTime');
}

setTimeout(print,1500);



