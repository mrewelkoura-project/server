const router = require("express").Router();
const jerseyController = require("../controllers/jersey.controller");

router.get("/jerseysdata", jerseyController.getJerseys);

router.post("/postjersey", jerseyController.createJersey);

router.put("/id:update", jerseyController.editJersey);

router.delete("/id:del", jerseyController.deleteJersey);

module.exports = router;
