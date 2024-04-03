const {Schema, model} = require("mongoose")


const Brand = new Schema({
    title:{type:String, required:true},
})


module.exports = model("Brand", Brand);