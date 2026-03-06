const express = require("express");
const path = require("path");
const app = express();

// Serve static files (index.html, style.css, etc.)
app.use(express.static(path.join(__dirname)));

// All routes serve index.html (client-side routing handles the rest)
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Node server running on http://localhost:3000");
});
