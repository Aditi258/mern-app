const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const router = express.Router();

require("../db/conn");
const User = require("../models/userSchema");
const ImagePost = require("../models/imagepostSchema");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  const user = new User({
    name: name,
    email: email,
    phone: phone,
    password: password,
    cpassword: cpassword,
  });

  user
    .save()
    .then(() => {
      res.status(201).json({ message: "user registered successfully" });
    })
    .catch((err) => res.status(500).json({ error: "Failed to register" }));
});

router.post("/uploadphoto", upload.single("img"), (req, res, next) => {
  var obj = {
    name: req.body.name,
    detail: req.body.detail,
    img: req.body.img,
  };
  ImagePost.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      res.redirect("/");
    }
  });
});

router.get("/allPosts", async (req, res, next) => {
  try {
    const posts = await ImagePost.find();
    console.log(posts);
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

router.get("/allUsers", async (req, res, next) => {
  try {
    const posts = await User.find();
    console.log(posts);
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

module.exports = router;
