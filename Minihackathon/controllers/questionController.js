const data=require("../data.json");
const getData = ()=>{
  return data;
}


// Kiểm tra đáp án
const checkAnswers = answers => {
  var score = 0;
  for (questionKey in answers) {
    const questionId = parseInt(questionKey.split("_")[1]);
    if(parseInt(answers[questionKey]) === data.questions[questionId])
    score=score+data.question[questionId].name;
  }
  return score;
};
module.exports={getData,checkAnswers}
