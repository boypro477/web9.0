const express=require('express');
const router=express.Router();
const {getData}=require('../controllers/questionController');
router.get('/',(req,res)=>{
  res.render("questions",{questionData:getData()});
});
module.exports=router;
