import React, { Component } from 'react';
// import './TodoList.css';
// import axios from 'axios'
import 'antd/dist/antd.css'
import store from './store'
import { getInputChangeACtion, getAddTodoItemAction, getDeleteTodoItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handelStoreChange = this.handelStoreChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handelStoreChange)
  }

  componentDidMount() {
    // ajax请求一般放在这里charles mock数据
    // axios.get('/todolist/get').then((res) => {
    //   this.setState(() => ({list: [...res.data]}))
    // }).catch((error) => {
    //   console.log(error)
    // })
    const action = getTodoList()
    store.dispatch(action)
  }

  render() {
    // JSX
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  handleInputChange(e) {
    const action = getInputChangeACtion(e.target.value)
    store.dispatch(action)
  }

  handelStoreChange() {
    this.setState(store.getState())
  }

  handleSubmit() {
    const action = getAddTodoItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteTodoItemAction(index)
    store.dispatch(action)
  }
}

export default App;
