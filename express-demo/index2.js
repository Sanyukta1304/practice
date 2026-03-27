// Import Express framework
const express = require("express");
const app = express();

// Middleware to parse JSON data from requests
app.use(express.json());

// -------------------- CORS MIDDLEWARE --------------------
// This allows frontend (like HTML/React) to communicate with backend
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allowed methods
    
    // FIXED: Combined headers into one line (no duplicate)
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");

    next(); // Move to next middleware or route
});

// -------------------- IMPORT ROUTES --------------------
// Import routes from separate file
const rootRoute = require("./routes/rootRoute");
// FIXED: Use the imported routes
app.use("/", rootRoute);
// -------------------- DEFAULT ROUTE --------------------
// If no route matches, this will run
app.get("/", (req, res) => {
    console.log(req.query); // Log query parameters
    res.send("Hello, World!");
});
// -------------------- START SERVER --------------------
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});