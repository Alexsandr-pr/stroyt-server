

const {Schema, model, ObjectId} = require("mongoose")


const TypeProduct = new Schema({
    title:{type:String, required:true, unique:true},
    typeToolId:{type:ObjectId, ref: "TypeTool", required:true}
})


module.exports = model("TypeProduct", TypeProduct);
