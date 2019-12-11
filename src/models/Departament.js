const mongoose = require("mongoose");

const DepartamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  initials: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  stats: { type: Boolean, required: true, default: true },
  queue: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Queue' }],
  owner: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Departament = mongoose.model("Departament", DepartamentSchema);
