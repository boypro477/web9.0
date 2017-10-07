'use strict'

const fs= require('fs');
//fs.writeFileSync();
let input =[];
let numberOfTestcases=Math.floor(Math.random() * (500 - 0) + 0) ;
const min=-10000;
const max=10000;
function rd(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let target,output;
let first,last;
let obj;
function generate(numberOfTestinputs, filePath = "./test-data.json"){
  //return Array.from(Array(numberOfTestcases)); // Remove this line and change to your own algorithm
  let arr=[];

function addinput()
{
  for(var i=0;i<numberOfTestcases;i++)
  {var a=rd(min,max);
input.push(a);
if(i=0)
first=a;
if(i=numberOfTestcases-1)
last=a;
  }
  input.sort((a,b) => a-b);
  return input;
}

if(numberOfTestcases>=5)
{
  function zerolength()
  {input=addinput();obj={


"input":[],
"target":rd(min,max),
"output":-1
};

return(obj);

  }
  arr.push(zerolength());

function notfound()
{input=addinput();
  obj={
"input":input,
"target":rd(min,max),
"output":-1
};
 return obj;
}
  arr.push(notfound());
function firstindex()
{input=addinput();
  obj={
"input":input,
"target":first,
"output":0
} ;
  return obj;
}
  arr.push(firstindex());
function lastindex()
{input=addinput();
  obj={
"input":input,
"target":last,
"output":(input.length-1)
} ;
 return obj;
}
 arr.push(lastindex());
function middleindex()
{input=addinput();  obj={
"input": input,
"target": input[Math.floor(input.length/2)],
"output": Math.floor(input.length/2)
};
 return obj;
}
  arr.push(middleindex());
}

fs.writeFileSync(filePath,arr,'utf-8');
return arr;
}

module.exports = generate
