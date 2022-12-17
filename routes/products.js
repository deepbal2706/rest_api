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
    firstName: req.body.userFirstName,
    lastName: req.body.userLastName,
    email: req.body.userEmail,
    phone: req.body.userPhone,
    date:req.body.eventDate,
   location: req.body.eventLocation,

    });
    product.save().then(product=>{
        res.send(product);

    }).catch(error=>{
        console.log(error);
        res.status(500).send("data is not submitted");
    });});

    module.exports=router;