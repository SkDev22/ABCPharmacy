const express = require("express");
const User = require("../models/usersModel");

const router = express.Router();

//get all Users
router.get("/", (req, res) => {
  User.find()
    .then((User) => res.json(User))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Add Users
router.post("/add", (req, res) => {
  const name = req.body.name;
  const mobile = Number(req.body.mobile);
  const email = req.body.email;
  const address = req.body.address;
  const billType = req.body.billType;

  const newUser = new User({
    name,
    mobile,
    email,
    address,
    billType,
  });

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get each user by id
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((User) => res.json(User))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Update each User
router.put("/update/:id", (req, res) => {
  User.findById(req.params.id)
    .then((User) => {
      User.name = req.body.name;
      User.mobile = Number(req.body.mobile);
      User.email = req.body.email;
      User.address = req.body.address;
      User.billType = req.body.billType;

      User.save()
        .then(() => res.json("User Updated"))
        .catch((err) => res.status(404).json("Error: " + err));
    })

    .catch((err) => res.status(404).json("Error: " + err));
});

//Delete User
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
});

module.exports = router;
