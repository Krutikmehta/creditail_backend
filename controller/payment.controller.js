const mongoose = require("mongoose");
const moment = require("moment");
const Invoice = mongoose.model("Invoice");

const paymentController = {
  getInvoices: (req, res) => {
    try {
      Invoice.find({}).then((invoices) => {
        console.log(invoices);
        return res.json({ invoices });
      });
    } catch {
      res.status(400);
      return res.json({ message: "err while fetching" });
    }
  },
  createInvoice: async (req, res) => {
    try {
      const data = req.body;
      const newInvoice = Invoice({ ...data });
      await newInvoice.save();
      res.json({ message: "obj created" });
    } catch {
      res.status(400);
      return res.json({ message: "obj creation err" });
    }
  },
  createInvoices: async (req, res) => {
    try {
      const data = req.body;
      await Invoice.insertMany(data);
      res.json({ message: "objs created" });
    } catch {
      res.status(400);
      return res.json({ message: "objs creation err" });
    }
  },
  updateInvoice: async (req, res) => {
    try {
      const body = req.body;
      const { billNo, pendingAmount } = body;

      if (billNo === undefined || pendingAmount === undefined) {
        res.status(400);
        res.json({ message: "insufficient details provided" });
        return;
      }
      const filter = { billNo: body.billNo };
      const update = { pendingAmount: body.pendingAmount };
      const doc = await Invoice.findOneAndUpdate(filter, update, {
        returnOriginal: false,
      });
      return res.json({ doc });
    } catch {
      res.status(400);
      return res.json({ message: "obj update err" });
    }
  },
};

module.exports = paymentController;
