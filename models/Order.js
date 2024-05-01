const { Schema, model, ObjectId } = require("mongoose");

const Order = new Schema({
    userId: { type: ObjectId, ref: "User", required: true },
    order: { type: Array, required: true },
    date: { type: Date, required: true, default: Date.now }
});

module.exports = model("Order", Order);