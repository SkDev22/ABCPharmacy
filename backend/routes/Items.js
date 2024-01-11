const express = require("express");
const Item = require("../models/itemsModel");

const router = express.Router();

//get all Items
router.get("/", (req, res) => {
  Item.find()
    .then((Item) => res.json(Item))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Add Items
router.post("/add", (req, res) => {
  const name = req.body.name;
  const unitPrice = Number(req.body.unitPrice);
  const itemCategory = req.body.itemCategory;

  const newItem = new Item({
    name,
    unitPrice,
    itemCategory,
  });

  newItem
    .save()
    .then(() => res.json("Item Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get each item by id
router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((Item) => res.json(Item))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Update each item
router.put("/update/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((Item) => {
      Item.name = req.body.name;
      Item.unitPrice = Number(req.body.unitPrice);
      Item.itemCategory = req.body.itemCategory;

      Item.save()
        .then(() => res.json("Item Updated"))
        .catch((err) => res.status(404).json("Error: " + err));
    })

    .catch((err) => res.status(404).json("Error: " + err));
});

//Delete Item
router.delete("/:id", (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item Deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
});

module.exports = router;
