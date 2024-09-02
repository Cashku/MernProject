const express = require("express");
const cors = require("cors");
const moongoose = requaire("mongoose");
const app = express();

app.listen(5000, () => {
  console.log("Server Created!");
});

app.use("/", (req, res) => {
  res.send("Hello Node!");
});

app.use(
  cors({
    credentials: true,
    origin: "https://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);

app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
app.use(express.json({ limit: "1000mb", extended: true }));
