const express=require("express");

const sequelize = require("sequelize");

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

app.get("api/v1/stock-level", (req, res,next) => {
  db.Stock.findAll({
    attributes: ['ProductId', [sequelize.fn('count', sequelize.col('ProductId')), 'Stock']],

  })
});

}
module.exports=router;

/*
stock level computation 


stock alert  mechanism 

*/


