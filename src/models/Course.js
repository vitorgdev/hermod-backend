const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  initials: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  stats: { type: Boolean, required: true, default: true },
});

CourseSchema.plugin(mongoosePaginate);

mongoose.model("Course", CourseSchema);
