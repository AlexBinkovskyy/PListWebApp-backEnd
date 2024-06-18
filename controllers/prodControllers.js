import { DB_HOST } from "../app.js";
import { Product } from "../models/productModel.js";

export const getProdList = async (req, res) => {
  const response = await Product.find();

  res.json(response);
};

export const createProduct = async (req, res) => {
  const  product  = req.body;
  const newProduct = new Product(product);
  await newProduct.save();
  res.status(201).json(product);
};
