const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "Hello World" });
});

const PORT = process.env.PORT || 3001
app.listen(PORT);

// http://localhost:3001