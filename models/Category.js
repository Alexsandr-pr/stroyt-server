const {Schema, model, ObjectId} = require("mongoose")


const Category = new Schema({
    type: {type:String, required:true},
    title:{type:String, required:true},
    typeTools:[{type:ObjectId, ref: "TypeTool", required:true}]
})


module.exports = model("Category", Category);