const express = require("express");
const Service = require("../models/Modelservice"); // Updated to Modelservice.js
const router = express.Router();

// Add a new service
router.post("/", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || price == null) {
      return res
        .status(400)
        .json({ error: "Name, description, and price are required." });
    }

    const service = new Service({ name, description, price });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a service
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const service = await Service.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a service
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
