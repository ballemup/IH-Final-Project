const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Message = require("../models/Message");
const User = require("../models/User");
const margaritas = require("../data/margaritas");

router.post(`/add-message`, authorize, (req, res) => {
  let msg = req.body;
  msg.ownerId = res.locals.user._id;
  Message.create(msg).then((message) => res.json(message));
});
router.get("/margaritas", (req, res) => {
  res.json({ margaritas });
});
router.get(`/get-user`, authorize, async (req, res) => {
  let user = await User.findById(res.locals.user._id);
  res.json(user);
});

router.get("/get-messages", (req, res) => {
  Message.find().then((messages) => res.json(messages));
});

router.get("/get-my-messages", authorize, (req, res) => {
  Message.find({ ownerId: res.locals.user._id }).then((messages) =>
    res.json(messages)
  );
});

router.get("/", (req, res) => {
  res.json({ serverWorks: true });
});

router.post("/logMeIn", async (req, res) => {
  //FIND USER
  let user = await User.findOne({ email: req.body.email });

  //IF NO USER >> CREATE USER

  if (!user) {
    user = await User.create(req.body);
  }

  jwt.sign({ user }, "secret key", { expiresIn: "30min" }, (err, token) => {
    res.json({ user, token });
  });
});

function authorize(req, res, next) {
  console.log("middleware", req.headers);
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, "secret key", async (err, data) => {
      if (!err) {
        console.log(data);
        res.locals.user = data.user;
        next();
      } else {
        console.error(err);
        res.json({ err });
      }
    });
  } else {
    res.status(403).json({ message: "You dont have a token" });
  }
}

module.exports = router;
