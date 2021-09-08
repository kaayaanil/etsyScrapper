const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProduct = asyncHandler(async (req, res, next) => {
  const _id = req.params.id;

  const product = await Product.findById({ _id });

  if (product) {
    res.status(200).json({
      _id: product._id,
      product_id: product.product_id,
      name: product.name,
      image: product.image,
      price: product.price,
    });
  } else {
    res.status(400);
    throw new Error("Product is not found...");
  }
});

module.exports = getProduct;
