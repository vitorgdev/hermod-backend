const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const NumberSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  status: { type: String, default: "waiting" },
  createdAt: { type: Date, default: Date.now() },
  startedAt: { type: Date },
  endedAt: { type: Date },
  name: { type: String, required: true },
  initials: { type: String, required: true }
});

NumberSchema.plugin(mongoosePaginate);

mongoose.model("Number", NumberSchema);
