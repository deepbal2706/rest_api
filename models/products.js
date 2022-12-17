const mongoose=require("mongoose");
//creating Schema

const productSchema=new mongoose.Schema({
    tables:{type: Boolean, trim:true},
   chairs:{type: Boolean, trim:true},
    smallGazibos:{type: Boolean, trim:true},
    largeGazibos:{type: Boolean, trim:true},
    heater:{type: Boolean, trim:true},
   lights:{type: Boolean, trim:true},
   firstName: {type: String, trim:true, required: true},
    lastName: {type: String, trim: true, required: true},
    email: {type: String, trim: true, required: true},
    phone: {type: Number, trim: true, required: true},
   date: {type: Date, trim: true, required: true},
   location: {type: String, trim: true, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, defauly: Date.now}
});

module.exports = new mongoose.model("Product", productSchema);
