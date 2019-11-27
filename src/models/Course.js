const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  initials: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  stats: { type: Boolean, required: true, default: true },
});

mongoose.model("Course", CourseSchema);
