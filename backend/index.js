const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

console.log("Testing 1,2,3");

// mongoose
//   .connect(
//     //****ADD MONGODB PATH HERE****,
//     {
//       useCreateIndex: true,
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then((x) =>
//     console.log(`Connected to MongoDB! Database name: ${x.connections[0].name}`)
//   )
//   .catch((err) => console.log("Error connecting to MongoDB", err));

app.listen(5000);
