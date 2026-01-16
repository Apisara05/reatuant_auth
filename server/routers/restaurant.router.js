const restaurantController = require("../controllers/restaurant.controller.js");

const express = require("express");
const router = express.Router();

// POST http://localhost:5000/api/v1/restaurant
router.post("/", authMiddleware.verifyToken,authMiddleware.isModOrAdmin, restaurantController.create);
router.get("/", restaurantController.getAll);
router.get("/:id", restaurantController.getById);
router.put("/:id", restaurantController.update);
router.delete("/:id", restaurantController.deleteById);
router.get("/:id",authMiddleware.verifyToken,authMiddleware.isAdmin,restaurantController.getById
);
module.exports = router;
