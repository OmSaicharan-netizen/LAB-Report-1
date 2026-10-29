// Tasks 4-6: the same server rewritten with Express, plus routes and a 404 handler
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// GET / -> welcome text
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Lab 1: Node.js and Express server");
});

// GET /about -> JSON with name and section
app.get("/about", (req, res) => {
  res.status(200).json({
    name: "OM SAI CHARAN MANCHANI",
    section: "CSE-GEN-AI 2B 111",
  });
});

// GET /time -> current date and time
app.get("/time", (req, res) => {
  res.status(200).json({ currentTime: new Date().toString() });
});

// Unknown path -> 404 (must stay after all other routes)
app.use((req, res) => {
  res.status(404).send("404 Not Found: this route does not exist");
});

// Start the server only when run directly (node server.js);
// export the app so hosts like Vercel can use it too.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
