const express=require("express");



const db=require("../models");
function router(app){

    app.get("/api/v1/products-list", (req, res,next) => {
        db.Products.findAll({
            include:[db.Category]

        }).then((data)=>{
           res.json(data)
        }).catch((err)=>{
            next(err)
        })
      
    });

    
    app.get("/api/v1/product-info{id}", (req, res,next) => {
        db.Products.findAll({
            where:{
                id:req.param.id
            }
        }).then((productinfo)=>{
            res.json(productinfo)
        }).catch((err)=>{
            next(err)
        })
      
    });
    app.post("/api/v1/product", (req, res, next) => {
      db.Products.create({
          name:req.body.name,
          barcode:req.body.barcode,
          Title:req.body.Title,
          summary:req.body.summary,
          Type:req.body.Type,
          Date_Recieved:req.body.Date_Recieved,
          Date_sold:req.body.Date_sold,
          availabilty:req.body.availabilty,
          purchasePrice:req.body.purchasePrice,
          sellPrice:req.body.sellPrice
      }).then((data)=>{
          res.json(data)
      }).catch((err)=>{
          next(err)
      })
    });

    app.patch("/api/v1/product/{id}",(req,res,next)=>{
        db.Product.Update({
          name:req.body.name,
          barcode:req.body.barcode,
          Title:req.body.Title,
          summary:req.body.summary,
          Type:req.body.Type,
          Date_Recieved:req.body.Date_Recieved,
          Date_sold:req.body.Date_sold,
          availabilty:req.body.availabilty,
          purchasePrice:req.body.purchasePrice,
          sellPrice:req.body.sellPrice
        }).then((data)=>{
             res.json(data)
        }).catch((err)=>{
            next(err)
        })
    })

    app.delete("/api/v1/product-destroy/{id}",(req,res,next)=>{
        db.Products.destroy({
            where:{
                id:req.param.id
            }
        }).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            next(err)
        })
    })
    app.get("api/v1/product?search/keyword",(req,res,next)=>{
        db.Products.findAll({
            where:{
                $or:{
                    name: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      barcode:{
                          $like:"%"+req.params.keyword +"%"
                      },
                      Title: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      summary: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      Type: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      purchasePrice: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      sellPrice: {
                        $like: "%" + req.params.keyword + "%"
                      },
                      
                }
            }
        }).then((results)=>{
            res.json(results)
                
            }).catch((err)=>{
                next(err)
            })
        })
        

    
}
module.exports=router;
