const router = require("express").Router();
const jerseyController = require("../controllers/jersey.controller");

router.get("/data", jerseyController.getJerseys);

router.post("/post", jerseyController.createJersey);

router.put("/id:update", jerseyController.editJersey);

router.delete("/id:del", jerseyController.deleteJersey);

module.exports = router;
