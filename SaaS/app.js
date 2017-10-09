const fs =require('fs');
//let resultAsync=fs.writeFile("");//chay khong dong bo
const express=require('express');
//const path=require('path'); đường dẫn đẹp hơn
// const fileController=require('./fileController');
// const outputFileName="test.json";
// let fileString="FIle hello word";
// let testObject={
// a:1,
// b:2
//
// };
// //let result =fs.writeFileSync("test.json",JSON.stringify(testObject),{endcoding:"utf-8"});//chạy đồng bộ
// let result= fileController.readDataFromFile(outputFileName);
// console.log(result);
// let testwriteModuleObject={
//   test1:"test1",
//   test2:"test2"
// };
// fileController.writeDataToFile(outputFileName,testwriteModuleObject);
//
// let readFileResult= fs.readFileSync("test.json","utf-8");
// console.log(readFileResult);
// let convertedObject=JSON.parse(readFileResult);
// console.log(convertedObject);
// // fs.readFileSync()
// //json javascript object notation
// let readFileResultAsync=fs.readFile("test.json","utf-8",(err,data)=>{
// console.log(data) });
// console.log("result",readFileResultAsync);
// console.log("Hello word");

let app=express();
app.get('/',(req,res)=>{
  console.log(__dirname);
//   let readFileResult= fs.readFile("public/style.css");
res.sendFile(__dirname +"/public/index.html");
// .. để lên một cấp ../public/
//../../ lên cao hơn
});
app.get('/about',(req,res)=>{
res.send("I'm Tu");
});
//console.log(__dirname+"/public/style.css");
app.get('/testhtml',(req,res)=>{
  let test=5;
let es6String="abc"+test.toString()+"adas";
let es6String=`abc+${test}+"adas`;
console.log(es6string);
  res.send("<h1>Test html</h1><ul><li>1</li><li>2</li></ul>")
})
app.get('/style.css',(req,res)=>{
res.sendFile(__dirname+"/public/style.css")
})

app.listen(6969,(err)=>{
  if(err){
    console.log(err);
  }else {
    console.log("website is up");
  }
})
