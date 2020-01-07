const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, lowercase: true, },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now() },
  status: { type: Boolean, required: true, default: true },
  auth: {
    token: { type: String },
    expires: { type: String },
  },
  departaments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Departament' }]
});

mongoose.model("User", UserSchema);
