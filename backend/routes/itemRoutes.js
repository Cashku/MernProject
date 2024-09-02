const express = reqiure("express");
const itemModel = require("../models/itemModel");

const app = express();

app.post("", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send("Not created:" + err);
  }
});
