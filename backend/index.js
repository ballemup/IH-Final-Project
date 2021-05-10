const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

console.log("Testing 1,2,3");

mongoose
  .connect(
    "mongodb+srv://ironhackgroup:ihgroup@cluster0.vxfjn.mongodb.net/test?authSource=admin&replicaSet=atlas-8jep18-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) =>
    console.log(`Connected to MongoDB! Database name: ${x.connections[0].name}`)
  )
  .catch((err) => console.log("Error connecting to MongoDB", err));

app.listen(5000);
