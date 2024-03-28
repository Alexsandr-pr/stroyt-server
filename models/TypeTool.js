const {Schema, model, ObjectId} = require("mongoose")


const TypeTool = new Schema({
    typeTool: {type:String, required:true},
    title:{type:String, required:true},
    category:{type:ObjectId, ref: "Category", required:true},
    typeProducts: [{type:ObjectId, ref:"TypeProduct", required:true}]
})


module.exports = model("TypeTool", TypeTool);