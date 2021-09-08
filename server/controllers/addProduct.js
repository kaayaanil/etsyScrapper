const { default: axios } = require("axios");
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const addProduct = asyncHandler(async (req, res) => {
  const { product_id } = req.body;

  const productExists = await Product.findOne({ product_id });

  if (productExists) {
    const product = productExists;
    res.status(201).json({
      _id: product._id,
      product_id: product.product_id,
      name: product.name,
      image: product.image,
      price: product.price,
    });
  } else {
    const URI = `https://openapi.etsy.com/v2/listings/${product_id}?api_key=${process.env.ETSY_API_KEY}&includes=MainImage`;
    const response = await axios.get(URI);

    const name = response.data.results[0].title;
    const image = response.data.results[0].MainImage.url_fullxfull;
    const price = response.data.results[0].price;

    const product = await Product.create({
      product_id,
      name,
      image,
      price,
    });

    if (product) {
      res.status(201).json({
        _id: product._id,
        product_id: product.product_id,
        name: product.name,
        image: product.image,
        price: product.price,
      });
    } else {
      res.status(400);
      throw new Error("Error occured");
    }
  }
});

module.exports = addProduct;
