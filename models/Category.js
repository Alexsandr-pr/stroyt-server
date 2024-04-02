const {Schema, model} = require("mongoose")


const Category = new Schema({
    type: {type:String, required:true},
    title:{type:String, required:true},
})


module.exports = model("Category", Category);