const path = require("path");
const express = require("express");
const routController = require("../controller/conroller");

const router = express.Router();

router.get("/", routController.getMain);
router.get("/api", routController.getApi);
router.get("/about", routController.getController);
router.use(routController.getNotfound);
module.exports = router;
