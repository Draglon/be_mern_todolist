import { body } from 'express-validator'

export const toDoListValidations = [
  body('userId', 'userId is required').isString().optional(),
  body('todo', 'Todo title is required').isString().optional(),
]
