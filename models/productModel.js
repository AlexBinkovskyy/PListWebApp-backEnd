import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    imageUrl: String,
    count: Number,
    size: {
      width: String,
      height: String,
    },
    weight: String,
    comment: [{ type: String }],
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

export const Product = mongoose.model("product", productSchema);
