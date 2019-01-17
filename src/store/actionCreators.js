import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

export const getInputChangeACtion = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue
})

export const getAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteTodoItemAction = (index) => ({
  type: DELETE_TODO_ITEM
})