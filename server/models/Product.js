const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img : {
        type : String,
        required : true,
    },
    brand: {
      type: String,
      required: true,
      unique: true,
    },
    size: {
      type: Number,
      required: true,
    },
    category: {
      type: Array,
    },
    type: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      unique: true,
    },
    occasion: {
      type: String,
      required: true,
      unique: true,
    },
    performance: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);