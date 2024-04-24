const {Schema, model, ObjectId} = require("mongoose")


const TypeTool = new Schema({
    
    title:{type:String, required:true, unique:true},
    categoryId:{type:ObjectId, ref: "Category", required:true}, 
})


module.exports = model("TypeTool", TypeTool);