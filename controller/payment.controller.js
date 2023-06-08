const mongoose = require("mongoose");
const moment = require("moment");
const Invoice = mongoose.model("Invoice");

const paymentController = {
  getInvoices: (req, res) => {
    Invoice.find({}).then((invoices) => {
      console.log(invoices);
      return res.json({ invoices });
    });
  },
  createInvoice: async (req, res) => {
    const data = req.body;
    const newInvoice = Invoice({ ...data });

    try {
      await newInvoice.save();
      res.json({ message: "obj created" });
    } catch {
      res.status(400);
      return res.json({ message: "obj creation err" });
    }
  },
  updateInvoice: async (req, res) => {
    const body = req.body;
    const { billNo, pendingAmount } = body;

    if (billNo === undefined || pendingAmount === undefined) {
      res.status(400);
      res.json({ message: "error" });
      return;
    }
    const filter = { billNo: body.billNo };
    const update = { pendingAmount: body.pendingAmount };
    const doc = await Invoice.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });
    return res.json({ doc });
  },
};

module.exports = paymentController;
