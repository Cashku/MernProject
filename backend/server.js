const express = require("express");
const cors = require("cors");
const moongoose = require("mongoose");
const session = require("express-session");
const app = express();
const itemRoute = require("./routes/itemRoutes");
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

moongoose
  .connect(
    "mongodb+srv://Cashku:3135@cluster0.lt816.mongodb.net/MernProject?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB start");
  })
  .catch(() => {
    console.log("server created");
  });

app.use(itemRoute);
app.listen(5000, () => {
  console.log("Server Created!");
});
