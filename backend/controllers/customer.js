const express=require("express");



const db=require("../models");
function router(app){

    // customer account 

    app.post("/api/v1/customer", (req, res,next) => {
        db.Customers.create({
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

    app.patch("api/v1/customer/{id}",(req,res,next)=>{
        db.Customers.update({
            f_name:req.body.f_name,
            l_name:req.body.l_name,
            email:req.body.email,
            contact:req.body.contact,
            address:req.body.address,
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

    app.get("/api/v1/customers-list", (req, res,next) => {
        db.Customers.findAll({
        }).then((data)=>{
            res.json(data)

        }).catch((err)=>{
            next(err)
        })
      
    });

    app.get("/api/v1/customer/{id}", (req, res,next) => {
        db.Customers.findOne({
        },
        {
            where:{
                id:req.params.id
            }
        })
      
    });

app.get("/api/v1/customers/orders/products", (req, res,next) => {
db.Orders.findAll({
    include:[db.customers]
}).then((data)=>{
    res.json(data)
}).catch((err)=>{
    next(err)
})
});

    
app.get("/api/v1/customer-order/{id}",(req,res,next)=>{
    db.Orders.findAll({
        // to be fixed properly 
        include:[db.Customers],
        where:{
            id:req.user.id
        }
    }).then(()=>[

    ]).catch((err)=>{
        next(err)
    })
})

}
module.exports=router;

