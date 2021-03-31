const express=require("express");



const db=require("../models");
function router(app){
// create staff 
app.post("/api/staff",(req,res,next)=>{
   db.Staff.create({
       f_name:req.body.f_name,
       l_name:req.body.l_name,
       email:req.body.email,
       contact:req.body.contact,
       address:req.body.address,
       position:req.body.position,
       pwd:req.body.pwd,

   }).then((data)=>{
       res.json(data)
   }).catch((err)=>{
       next(err)
   })

})

// update staff data 
app.patch("/api/staff/{id}",(req,res,next)=>{
    db.staff.update({
       f_name:req.body.f_name,
       l_name:req.body.l_name,
       email:req.body.email,
       contact:req.body.contact,
       address:req.body.address,
       position:req.body.position,
       
    },{
        where:{
            id:req.user.id
        }
    }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        next(err)
    })
})

app.get("/api/staff-members",(req,res,next)=>{
    db.Staff.findAll({}).
    then((data)=>{
        res.json(data)
    }).catch((err)=>{
        next(err)
    })
})

// get single staff member 

app.get("/api/staff/staff-member{id}", (req, res) => {
  db.Staff.findOne({

  },{
  where:{
      id:req.user.id
  }
  })
});




}

module.exports=router;
