const express=require("express");



const db=require("../models");
function router(app){

app.get("/api/stock-list", (req, res,next) => {
  db.Stock.findAll({

  }).then((data)=>{
      res.json(data)
  }).catch((err)=>{
      next(err)
  })
});

}
module.exports=router;

/*
stock level computation 

stock alert  mechanism 


