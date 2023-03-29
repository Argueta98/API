const { Schema, model } = require("mongoose");

const InvoiceSchema = Schema({
  
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
  total: {
    type: Number,
    default: 0,
  }

});

InvoiceSchema.methods.toJSON = function () {
  const { __v, status, ...data } = this.toObject();
  return data;
};

module.exports = model("Invoice", InvoiceSchema);