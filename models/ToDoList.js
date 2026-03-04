import mongoose from "mongoose";

const ToDoListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  todo: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

export default mongoose.model('TodoList', ToDoListSchema);
