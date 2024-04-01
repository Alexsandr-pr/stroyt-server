

const {Schema, model, ObjectId} = require("mongoose")


const TypeProduct = new Schema({
    typeproduct: {type:String, required:true},
    title:{type:String, required:true},
    typeTool:{type:ObjectId, ref: "TypeTool", required:true}
})


module.exports = model("TypeProduct", TypeProduct);
