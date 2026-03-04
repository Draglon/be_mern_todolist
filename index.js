import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import { MONGO_URI, PORT } from "./lib/constants/index.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js";
import { registerValidation, loginValidation } from "./validations/userValidations.js";
import { UserController, ToDoListController } from "./controllers/index.js";

// Connecting to a database
mongoose
  .connect(MONGO_URI)
  .then(() => { console.log('DB ok') })
  .catch((err) => { console.log('DB error', err) });

const app = express();
app.use(express.json()); // reads JSON requests
app.use(cors()); // CORS

// login
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
// registration
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)
// general information by user
app.get('/auth/user', checkAuth, UserController.getMe)

// fetch todo list
app.get('/todo_list', checkAuth, ToDoListController.fetchToDoList)
// create todo list
app.post('/todo_list', checkAuth, ToDoListController.createToDoListItem)
// update todo list
app.update('/todo_list:id', checkAuth, ToDoListController.updateToDoListItem)
// delete todo list
app.delete('/todo_list/:id', checkAuth, ToDoListController.deleteToDoListItem)

// Start server
app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log('Server OK')
});
