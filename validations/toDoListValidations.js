import { body } from 'express-validator'

export const toDoListValidations = [
  body('todo', 'Title').trim().required(),
]
