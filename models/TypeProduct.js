

const {Schema, model, ObjectId} = require("mongoose")


const TypeProduct = new Schema({
    type: {type:String, required:true},
    title:{type:String, required:true},
    typeToolId:{type:ObjectId, ref: "TypeTool", required:true}
})


module.exports = model("TypeProduct", TypeProduct);
