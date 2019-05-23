const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const NumberSchema = new mongoose.Schema({
  number: { type: Number },
  status: { type: String, default: "waiting" },
  createdAt: { type: Date, default: Date.now() },
  startedAt: { type: Date },
  endedAt: { type: Date },
  name: { type: String, required: true },
  initials: { type: String, required: true }
});
NumberSchema.plugin(AutoIncrement, { inc_field: "number" });
NumberSchema.plugin(mongoosePaginate);

mongoose.model("Number", NumberSchema);
