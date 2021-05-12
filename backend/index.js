const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

console.log("Testing 1,2,3");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/HackerBlog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected! Database name: ${x.connections[0].name}`)
  )
  .catch((err) => console.error("Error connecting to Database", err));

app.use(express.json());

app.use(cors());

app.use("/api", require("./routes/routes.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
