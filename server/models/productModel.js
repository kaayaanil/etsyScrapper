const mongoose = require("mongoose");

const CounterSchema = mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

var counter = mongoose.model("counter", CounterSchema);

const productSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    product_id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.pre("save", function (next) {
  var doc = this;
  counter.findByIdAndUpdate(
    { _id: "productId" },
    { $inc: { seq: 1 } },
    { upsert: true, new: true },
    function (error, counter) {
      if (error) return next(error);
      doc._id = counter.seq;
      next();
    }
  );
});

module.exports = mongoose.model("Product", productSchema);
