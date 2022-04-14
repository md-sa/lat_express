const express = require("express");
const router = express.Router();
const controller = require("./controllers/controllers");
const auth = require("./middleware/auth");

router.get("/", controller.page_1);
router.get("/check-health", controller.checkHealth);
router.get("/biodata", auth.validateAuthKey, controller.biodata);
router.post("/biodata", controller.query);

module.exports = router;
