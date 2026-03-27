const express = require("express");
const router = express.Router();

// Root route
router.get("/", (req, res) => {
    res.send("Root Route Working ✅");
});

// Example API route
router.get("/api/test", (req, res) => {
    res.json({
        message: "API is working 🚀"
    });
});

module.exports = router;