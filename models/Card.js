const {Schema, model, ObjectId} = require("mongoose")


const Card = new Schema({
    images: {type:Array, required: false}, 
    title: {type: String, required: true}, 
    code:{type:String, required:true, unique:true},
    sale: {type: Number, required: true, default: 0},
    brandId: {type:ObjectId, ref: "Brand",  required: true},
    price: {type: Number, required: true}, 
    params:{type:Array, required:true},
    categoryId: {type:ObjectId, ref: "Category"},
    typeToolId:{type:ObjectId, ref: "TypeTool"},
    typeProductId:{type:ObjectId, ref:"TypeProduct"}
})


module.exports = model("Card", Card);