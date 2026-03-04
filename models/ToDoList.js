import mongoose from "mongoose";

const ToDoListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

export default mongoose.model('Order', ToDoListSchema);
