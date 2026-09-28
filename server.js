const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the LittleBigDream LBD website
app.use(express.static(__dirname));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "LittleBigDream_LBD_style_preserved.html"));
});

// Health/status endpoint
app.get("/api/status", (req, res) => {
  res.json({
    online: true,
    service: "LittleBigDream LBD",
    status: "online"
  });
});

// Fallback for direct page requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "LittleBigDream_LBD_style_preserved.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`LittleBigDream LBD server running on port ${PORT}`);
});
