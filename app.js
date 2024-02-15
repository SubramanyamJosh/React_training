const express = require("express");
const app = express();

app.use(express.json());
const data = require("./data.json");

app.get("/employees", (req, res) => {
  try {
    res.status(200).json({ message: "Success", data });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.post("/employees", (req, res) => {
  try {
    const id = data.length + 1;
    data.push({ id, ...req.body });
    res.status(200).json({ message: "Employee creadted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.listen(3001, "127.0.0.1", () => {
  console.log("Server is running at 3001");
});
