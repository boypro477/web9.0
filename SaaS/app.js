const fs =require('fs');
//let resultAsync=fs.writeFile("");//chay khong dong bo
const express=require('express');

let app=express();
app.get('/',(req,res)=>{
  console.log(__dirname);
res.sendFile(__dirname +"/public/index.html");

});
app.get('/about',(req,res)=>{
res.sendFile(__dirname +"/public/about.html");
});
app.get('/styleabout.css',(req,res)=>{
res.sendFile(__dirname+"/public/styleabout.css")
})
//console.log(__dirname+"/public/style.css");

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
