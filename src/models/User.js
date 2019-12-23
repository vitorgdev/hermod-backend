const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    course_id: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
  },
  { _id: false }
);

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  stats: { type: Boolean, required: true, default: true },
  courses: [CourseSchema]
});

mongoose.model("User", UserSchema);
