const answerModel=require('../models/answerModel');
const questionModel=require('../models/questionModel');
const getAnswerByIdQuestion=(id,callback)=>{
    answerModel.find({idQuestion:id},(err,data)=>{
      if(err)
      {
        console.log(err);
      callback(err);
      }
      else{
        callback(data);
      }
    })
}
const createAnswer=(answer,idQuestion,idUser,callback)=>{
  let newAnswer={
    answer:answer,
    idQuestion:idQuestion,
    idUser:idUser,
  }
  answerModel.create(newAnswer,(err,data)=>{
    if(err)
    {
      console.log(err);
      callback(err);
    }
    else{
      callback(null,data);
    }
  })
};

module.exports={getAnswerByIdQuestion,createAnswer};
