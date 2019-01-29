import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes'

export const getInputChangeACtion = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue
})

export const getAddItemACtion = () => ({
  type: ADD_ITEM
})

export const getDeleteItemACtion = (index) => ({
  type: DELETE_ITEM,
  index
})
