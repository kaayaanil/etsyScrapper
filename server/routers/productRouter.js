const express = require("express");
const addProduct = require("../controllers/addProduct");
const getProduct = require("../controllers/getProduct");
const listingProducts = require("../controllers/listingProducts");

const router = express.Router();

router.route("/:id").get(getProduct);
router.route("/").post(addProduct);
router.route("/").get(listingProducts);

module.exports = router;
