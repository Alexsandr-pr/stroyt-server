const {Schema, model, ObjectId} = require("mongoose")


const TypeTool = new Schema({
    type: {type:String, required:true},
    title:{type:String, required:true},
    categoryId:{type:ObjectId, ref: "Category", required:true}, 
})


module.exports = model("TypeTool", TypeTool);