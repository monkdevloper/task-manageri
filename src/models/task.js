const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      minlength: [6, "must be atleast 6, only {VALUE.length}"],
      required: true,
      trim: true,
      validate(value) {
        if (value.includes("taskName")) {
          throw new Error("task Name includes taskName");
        }
      },
    },
    Done: { type: Boolean, default: false },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
