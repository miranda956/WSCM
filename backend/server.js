
// @ts-ignore
const express =require('express');
// @ts-ignore
const cookieparser=require('cookie-parser');
// @ts-ignore
const methodoverride =require('method-override');
// @ts-ignore
const session=require('express-session');
// @ts-ignore
const cors =require('cors');

// @ts-ignore
// @ts-ignore
const bodyparser=require("body-parser");
// @ts-ignore
// @ts-ignore
const path =require("path");
const winston =require("winston");
const expresswinston =require("express-winston");
const db=require("./models");
// @ts-ignore
const bodyParser = require('body-parser');


const app=express();
// @ts-ignore
app.use(bodyparser.urlencoded({extended:false}));
// @ts-ignore
app.use(bodyparser.text());
// @ts-ignore
app.use(bodyparser.json());
// @ts-ignore
app.use(cors());
// @ts-ignore
app.use(cookieparser());
// @ts-ignore
app.use(session({
    secret:"q2455",
    resave:true,
    saveUninitialized:true
}));
// @ts-ignore
app.use(methodoverride("_method"));
// @ts-ignore
app.use(expresswinston.logger({
    transports:[
        new winston.transports.Console({
            // @ts-ignore
            json:true,
            colirize:true
        }),
        new winston.transports.File({
            filename:'logs/success.log'
        })
    ]
}))
// @ts-ignore
app.use(expresswinston.errorLogger({
    transports:[
        new winston.transports.Console({
            // @ts-ignore
            json:true,
            colorize:true
        }),
        new winston.transports.File({
            filename:"logs/error.log"
        })
    ]
}));
// @ts-ignore
app.use(express.static("public"));
require("./controllers/staff")(app);
require("./controllers/Order")(app)
require("./controllers/stock")(app)
require("./controllers/supplier")(app)
require("./controllers/customer")(app)

db.sequelize.sync({force:false}).then(()=>{
   const port = process.env.PORT || 4500;
   // @ts-ignore
   app.listen(port,()=> 
    console.log(`Server running on port ${port} 🔥`)); 
}).catch((err)=>{
    console.log(err)
});

    