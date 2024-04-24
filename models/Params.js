const {Schema, model, ObjectId} = require("mongoose")


const Params = new Schema({
    params: {type:Array, default: []},
    cardId: {type:ObjectId, required:true}
})


module.exports = model("Params", Params);