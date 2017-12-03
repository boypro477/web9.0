const mongoose=require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const answerModel = new Schema({
  // title: {type : String, required: true},
  answer:{type:String,require:true},
  idQuestion:{type:Schema.Types.ObjectId,require:true,ref:'questions'},
  idUser:{type:Schema.Types.ObjectId,require:true,ref:'users'},
  like:{type:Number,default:0},
   });

module.exports = mongoose.model('answers', answerModel);
