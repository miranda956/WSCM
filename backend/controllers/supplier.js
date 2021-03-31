const express=require("express");



const db=require("../models");
function router(app){

    app.get("/api/supplier-list", (req, res,next) => {
      db.Supplier.findAll({

      }).then((data)=>{
        res.json(data)
      }).catch((err)=>{
          next(err)
      })
    });
    app.post("/api/supplier", (req, res, next) => {
      db.Supplier.create({
          f_name:req.body.f_name,
          l_name:req.body.l_name,
          email:req.body.email,
          contact:req.body.contact,
          address:req.body.address,
          pwd:req.body.pwd

      }).then((data)=>{
         res.json(data)
      }).catch((err)=>{
          next(err)
      })
    });

    app.patch("/api/supplier/{id}",(req,res,next)=>{
        db.Supplier.update({
            f_name:req.body.f_name,
            l_name:req.body.l_name,
            email:req.body.email,
            contact:req.body.contact,
            address:req.body.address,
  

        }).then((data)=>{
            res.json(data)

        }).catch((err)=>{
            next(err)
        })
    })
}
module.exports=router;