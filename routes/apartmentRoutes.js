const axios = require("axios");
const router = require("express").Router();
const apartmentController = require("../controllers/apartmentController");

// localhost/api/apartment
router.get("/:id", apartmentController.find);
router.post("/search", apartmentController.search);

router.post("/create", apartmentController.create);
router.post("/:userId/save", apartmentController.save);
router.delete("/:userId/:id/unsave", apartmentController.unsave);
router.post("/:userId/savedApartments", apartmentController.findSavedApartment)
router.post("/matchedApartments", apartmentController.findSavedApartment);


module.exports = router;