const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  stats: { type: Boolean, required: true, default: true },
  departaments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Departament' }]
});

mongoose.model("User", UserSchema);
