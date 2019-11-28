var http= require('http');
var myPackage=require('./miPackage');
var myModule1=require('mymodule');
console.log(myModule1.myDateTime());
function print(){
console.log(myModule1.myDateTime());
console.log(myPackage.myDateTime());
}

setTimeout(print,1500);



