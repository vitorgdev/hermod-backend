const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);


const QueueSchema = new mongoose.Schema({
  number: { type: Number },
  status: { type: String, default: "waiting" },
  createdAt: { type: Date, default: Date.now() },
  startedAt: { type: Date },
  endedAt: { type: Date },
  departament: { type: mongoose.Schema.Types.ObjectId, ref: 'Departament' }
});

QueueSchema.plugin(AutoIncrement, { id: 'number_seq', inc_field: "number", reference_fields: ['type', 'name'] });

const Queue = mongoose.model("Queue", QueueSchema);
