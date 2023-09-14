const router = require("express").Router()
const controller = require("../controller/personController")


router.get("/api", controller.getAllPersons)
router.get("/api/:id", controller.getPerson)
router.post("/api", controller.createPerson)
router.delete("/api/:id", controller.deletePerson)
router.put("/api/:id", controller.updatePerson)

module.exports = router