const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const { default: axios } = require("axios");

const listingProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({}).sort({ _id: -1 });
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(400);
    throw new Error("An error occured....");
  }
});

module.exports = listingProducts;
