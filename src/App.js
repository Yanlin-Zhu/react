import React, { Component, Fragment } from 'react';
import './App.css';
import TodoItem from './TodoItem'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  componentDidMount() {
    // ajax请求一般放在这里charles mock数据
    axios.get('/todolist/get').then((res) => {
      this.setState(() => ({list: [...res.data]}))
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    // JSX
    return (
      <Fragment>
        <label htmlFor='insertArea'>输入内容</label>
        <input 
          ref={(input) => {this.input = input}}
          id='insertArea'
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>提交</button>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            key={index} 
            content={item} 
            index={index} 
            handleItemDelete={this.handleItemDelete}
          />
        )
      })
    )
  }

  // handleInputChange(e) {
  handleInputChange() {
    // 同步setState
    // this.setState({
    //   inputValue: e.target.value
    // })

    // 新版回调异步setState有性能提升
    // this.setState(() => {
    //   return {
    //     inputValue: e.target.value
    //   }
    // })

    // es6简写
    // 事件对象无法异步获取会被置为null
    // const value = e.target.value
    const value = this.input.value
    this.setState(() => ({inputValue: value}))
  }

  handleSubmit() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    console.log(index)
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
}

export default App;
