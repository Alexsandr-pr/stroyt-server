const {Schema, model} = require("mongoose")


const VendorCode = new Schema({
    code:{type:Number, required:true, unique:true},
})


module.exports = model("VendorCode", VendorCode);