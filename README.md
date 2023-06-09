# creditail_backend
- Nodejs, MongoDB
- invoice schem : {
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
      unique: true,
    },
    pendingAmount: {
      type: Number,
      required: true,
    },
  }
 - Index on db : billNo
 - host - creditail-backend.vercel.app
 - endpoints
    - POST - /api/v1/invoice
        - add a invoice
        - body : invoice schema
    - POST - /api/v1/invoices 
        - add multiple invoices
        - body : [invoice schema]      
    - GET - /api/v1/invoices      
        - get all invoices  
    - POST - /api/v1/update_invoice 
        - update a invoice
        - body : {billNo: String, pendingAmount: Number}
 - 
