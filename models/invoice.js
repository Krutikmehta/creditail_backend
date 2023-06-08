const mongoose = require("mongoose");

const schemaOptions = {
  timestamps: { createdAt: "invoiceDate", updatedAt: "collectionDate" },
};
const invoiceSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    salesRepId: {
      type: String,
      required: true,
    },
    salesRepName: {
      type: String,
      required: true,
    },
    invoiceAmount: {
      type: Number,
      required: true,
    },
    retailerId: {
      type: String,
      required: true,
    },
    retailerName: {
      type: String,
      required: true,
    },
    retailerContact: {
      type: String,
      required: true,
    },
    billNo: {
      type: String,
      required: true,
    },
    pendingAmount: {
      type: Number,
      required: true,
    },
  },
  schemaOptions
);

mongoose.model("Invoice", invoiceSchema);
