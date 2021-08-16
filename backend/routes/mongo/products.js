const express = require("express");
const router = express.Router();
const controller = require("../../controllers/mongo/Controllerproducts");
const products = require("../../models/mongo/products");

router.get("/products", controller.index);
router.post("/products", controller.insert);
router.put("/products",controller.update);
router.delete("/products",controller.delete);

module.exports = router;