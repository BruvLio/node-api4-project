const express = require("express");

const server = express();

server.use(express.json());

server.get("/api/users", (req, res) => {
  res.json("hello, there");
});

server.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.status(201).json(req.body);
  } else {
    res.status(401).json({ message: "Must have username and password" });
  }
});

server.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.status(201).json(req.body);
  } else {
    res.status(401).json({ message: "Welcome" });
  }
});

module.exports = server;
