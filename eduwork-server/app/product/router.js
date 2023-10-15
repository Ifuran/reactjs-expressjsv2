const router = require("express").Router();
const os = require("os");
const multer = require("multer");
const upload = multer({ dest: os.tmpdir() });
const productController = require("./controller");

router.post("/products", upload.single("image"), productController.store);

module.exports = router;
