const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

console.log("Testing 1,2,3");

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://ironhackgroup:ihgroup@cluster0.fnlcd.mongodb.net/FinalGroupProject?authSource=admin&replicaSet=atlas-fw0wee-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) =>
    console.log(`Connected! Database name: ${x.connections[0].name}`)
  )
  .catch(() => console.error("Error connecting to Database"));

app.use(express.json());

app.use(cors());

app.use("/api", require("./routes/routes.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
