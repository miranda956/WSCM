const express=require("express");



const db=require("../models");
function router(app){

    app.get("/api/v1/orders-list", (req, res, next) => {
      db.Orders.findAll({
        include:[db.Products,db.Customers]
      }).then((data)=>{

      }).catch((err)=>{
          next(err)
      })
    });

}
module.exports=router;
