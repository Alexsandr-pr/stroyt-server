const {Schema, model, ObjectId} = require("mongoose")


const Card = new Schema({
    imageSrc: {type: String, required: true},
    imageArray: {}, 
    code:{type:String, required:true},
    sale: {type: Number, required: true, default: 0},
    brand: {type:String, required: true},
    title: {type: String, required: true}, 
    price: {type: Number, required: true}, 
    files:[{type:ObjectId, ref:"File"}],
    params:{type:Array, required:true},

    category: {type:ObjectId, ref: "Category"},
    typeTool:{type:ObjectId, ref: "TypeTool"},
    typeProduct:{type:ObjectId, ref:"TypeProduct"}
})


module.exports = model("Card", Card);