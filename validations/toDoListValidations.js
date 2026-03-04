import { body } from 'express-validator'

export const toDoListValidations = [
  body('title', 'Title').required(),
  body('description', 'Description').required(),
]
