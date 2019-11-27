const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const NumberSchema = new mongoose.Schema({
  number: { type: Number },
  status: { type: String, default: "waitingg" },
  createdAt: { type: Date, default: Date.now() },
  startedAt: { type: Date },
  endedAt: { type: Date },
  name: { type: String, required: true },
  initials: { type: String, required: true },
  type: { type: String, required: true }
});
NumberSchema.plugin(AutoIncrement, {id:'number_seq' ,inc_field: "number", reference_fields: ['type','name'] });
NumberSchema.plugin(mongoosePaginate);

mongoose.model("Number", NumberSchema);
