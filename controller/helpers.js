const mongoose = require("mongoose");
const moment = require("moment");
const Invoice = mongoose.model("Invoice");

const createInvoce = async (data) => {
  Invoice.findOne({ billNo: "123456" }).then(async (invoice) => {
    if (invoice) {
      return res.json({ message: "obj found", data: invoice });
    } else {
      const newInvoice = Invoice({
        brand: "brand",
        salesRepId: "1234",
        salesRepName: "krutik",
        invoiceAmount: 100,
        retailerId: "id",
        retailerName: "retailer",
        retailerContact: "1234567",
        billNo: "123456",
        pendingAmount: 50,
      });

      try {
        await newInvoice.save();
        res.json({ message: "obj created" });
      } catch {
        return res.json({ message: "obj creation err" });
      }
    }
  });
};
