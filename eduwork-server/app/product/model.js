const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name harus diisi!"],
      minlength: [4, "Minimal 4 karakter!"],
    },
    description: {
      type: String,
      maxlength: [1000, "Maksimal 1000 karakter!"],
    },
    price: {
      type: Number,
      default: 0,
    },
    image_url: String,
  },
  { timestamps: true }
);

module.exports = model("Makanan", productSchema);
