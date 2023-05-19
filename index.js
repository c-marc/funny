const express = require("express");
const app = express();

const shyrka = require("./middlewares/odysseus");

app.get("/", (req, res) => res.send("Hello World"));

// Add middleware
app.get("/:id", shyrka, (req, res) => {
  // Serious code and validated request goes here...
  const id = req.params["id"];
  res.json({ message: `Do some serious stuffs with id ${id}` });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(3000, () =>
  console.log("Ready to laugh on http://localhost:3000/:id")
);
