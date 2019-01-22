import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_TODO_ITEM } from './actionTypes'
// import axios from 'axios'

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

export const initListAction = (list) => ({
  type: GET_TODO_ITEM,
  list
})

export const getTodoList = () => {
  return (dispatch) => {
    // axios.get('/todolist/get').then((res) => {
      const action = initListAction(['aa'])
      dispatch(action)
    // }).catch((error) => {
    //   console.log(error)
    // })
  }
}