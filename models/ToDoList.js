import mongoose from "mongoose";

const TodoListSchema = new mongoose.Schema({
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

export default mongoose.model('TodoList', TodoListSchema);
