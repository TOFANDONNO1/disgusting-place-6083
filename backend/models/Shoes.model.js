const mongoose = require("mongoose");
const shoeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);
const ShoesModel = mongoose.model("shoe", shoeSchema);

module.exports = { ShoesModel };
