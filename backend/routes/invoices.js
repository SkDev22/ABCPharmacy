const express = require("express");
const Invoice = require("../models/invoiceModel");

const router = express.Router();

//get all Invoice
router.get("/", (req, res) => {
  Invoice.find()
    .then((Invoice) => res.json(Invoice))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Add Invoice
router.post("/add", (req, res) => {
  const itemName = req.body.itemName;
  const unitPrice = Number(req.body.unitPrice);
  const category = req.body.category;
  const uName = req.body.uName;
  const uMobile = Number(req.body.uMobile);
  const uEmail = req.body.uEmail;
  const uAddress = req.body.uAddress;
  const billType = req.body.billType;

  const newInvoice = new Invoice({
    itemName,
    unitPrice,
    category,
    uName,
    uMobile,
    uEmail,
    uAddress,
    billType,
  });

  newInvoice
    .save()
    .then(() => res.json("Invoice Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get each Invoice by id
router.get("/:id", (req, res) => {
  Invoice.findById(req.params.id)
    .then((Invoice) => res.json(Invoice))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Update each Invoice
router.put("/update/:id", (req, res) => {
  Invoice.findById(req.params.id)
    .then((Invoice) => {
      Invoice.itemName = req.body.itemName;
      Invoice.unitPrice = Number(req.body.unitPrice);
      Invoice.category = req.body.category;
      Invoice.uName = req.body.uName;
      Invoice.uMobile = Number(req.body.uMobile);
      Invoice.uEmail = req.body.uEmail;
      Invoice.uAddress = req.body.uAddress;
      Invoice.billType = req.body.billType;

      Invoice.save()
        .then(() => res.json("Invoice Updated"))
        .catch((err) => res.status(404).json("Error: " + err));
    })

    .catch((err) => res.status(404).json("Error: " + err));
});

//Delete Invoice
router.delete("/:id", (req, res) => {
  Invoice.findByIdAndDelete(req.params.id)
    .then(() => res.json("Invoice Deleted"))
    .catch((err) => res.status(404).json("Error: " + err));
});

module.exports = router;
