const express=require("express");



const db=require("../models");
function router(app){
// create staff 
app.post("staff/api/create",(req,res,next)=>{
   db.Staff.create({
       f_name:req.body.f_name,
       l_name:req.body.l_name,
       email:req.body.email,
       contact:req.body.contact,
       address:req.body.addresse,
       position:req.body.position,
       pwd:req.body.pwd,

   }).then((data)=>{
       res.json(data)
   }).catch((err)=>{
       next(err)
   })

})




}

module.exports=router;