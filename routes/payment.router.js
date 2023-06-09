const express = require("express");

const router = express.Router();

const paymentController = require("../controller/payment.controller");

router.post("/invoice", paymentController.createInvoice);
router.post("/invoices", paymentController.createInvoices);
router.post("/update_invoice", paymentController.updateInvoice);
router.get("/invoices", paymentController.getInvoices);

module.exports = router;
