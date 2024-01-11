const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    uName: {
      type: String,
      required: true,
    },
    uMobile: {
      type: Number,
      required: true,
    },
    uEmail: {
      type: String,
      required: true,
    },
    uAddress: {
      type: String,
      required: true,
    },
    billType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
