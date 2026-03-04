import { body } from 'express-validator'

export const toDoListValidations = [
  body('userId', 'userId is required').trim().required(),
  body('todo', 'Todo title is required').trim().required(),
]
