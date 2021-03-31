const express=require("express");



const db=require("../models");
function router(app){

    app.get("/api/products-list", (req, res,next) => {
        db.Products.findAll({

        }).then((data)=>{
           res.json(data)
        }).catch((err)=>{
            next(err)
        })
      
    });

    
    app.get("/api/product-info{id}", (req, res,next) => {
        db.Products.findAll({
            where:{
                id:req.params.id
            }
        }).then((productinfo)=>{
            res.json(productinfo)
        }).catch((err)=>{
            next(err)
        })
      
    });
}
module.exports=router;
