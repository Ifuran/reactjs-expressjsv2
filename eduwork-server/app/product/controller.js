const path = require("path");
const fs = require("fs");
const Makanan = require("./model");
// const { ObjectId } = require("mongodb");
const config = require("../config");

// const index = (req, res) => {
//   Product.find()
//     .then((result) => res.send(result))
//     .catch((error) => console.log(error));
// };

// const view = (req, res) => {
//   const { id } = req.params;
//   Product.findById(id)
//     .then((result) => res.send(result))
//     .catch((error) => console.log(error));
// };

const store = async (req, res, next) => {
  try {
    const payload = req.body;

    if (req.file) {
      let tmp_path = req.file.path;
      let originalExt =
        req.file.originalname.split(".")[
          req.file.originalname.split(".").length - 1
        ];
      let filename = req.file.filename + "." + originalExt;
      let target_path = path.resolve(
        config.rootPath,
        `public/images/products/${filename}`
      );

      const src = fs.createReadStream(tmp_path);
      const dest = fs.createWriteStream(target_path);
      src.pipe(dest);

      src.on("end", async () => {
        try {
          let product = new Makanan({ ...payload, image_url: filename });
          await product.save();
          return res.json(product);
        } catch (err) {
          fs.unlinkSync(target_path);
          if (err && err.name === "ValidationError") {
            return res.json({
              error: 1,
              message: err.message,
              fields: err.errors,
            });
          }
          next(err);
        }
      });

      src.on("error", async () => {
        next(err);
      });
    } else {
      let product = new Makanan(payload);
      await product.save();
      return res.json(product);
    }
  } catch (err) {
    if (err && err.name === "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

// const update = (req, res) => {
//   const { id } = req.params;
//   const { name, price, stock } = req.body;
//   const image = req.file;

//   if (image) {
//     const target = path.join(__dirname, "../../uploads", image.originalname);
//     fs.renameSync(image.path, target);
//     Product.updateOne(
//       { _id: id },
//       {
//         $set: {
//           name,
//           price,
//           stock,
//           image_url: `http://localhost:3000/gambar/${image.originalname}`,
//         },
//       }
//     )
//       .then((result) => res.send(result))
//       .catch((error) => console.log(error));
//   }
// };

// const destroy = (req, res) => {
//   const { id } = req.params;
//   Product.deleteOne({ _id: id })
//     .then((result) => res.send(result))
//     .catch((error) => console.log(error));
// };

module.exports = { store };
