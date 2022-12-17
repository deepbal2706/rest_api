const express=require('express');
const router=express.Router();
const Product=require('../models/products');
router.post('/',(req,res)=>{
    let product=new Product({
        tables: req.body.tables,
       chairs: req.body.chairs,
       smallGazibos: req.body.smallGazibos,
         largeGazibos: req.body.largeGazibos,
        heater: req.body.heater,
        lights: req.body.lights,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    date:req.body.date,
   location: req.body.location,

    });
    product.save().then(product=>{
        res.send(product);

    }).catch(error=>{
        console.log(error);
        res.status(500).send("data is not submitted");
    });});

    module.exports=router;