import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem'
import axios from 'axios'
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

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
      <div style={{margin: 10}}>
        <Input 
          style={{width: 300, marginRight: 10}}
          placeholder={'todo info'}
          ref={(input) => {this.input = input}}
          id='insertArea'
          // value={this.state.inputValue}
          onChange={this.handleInputChange}
          onPressEnter={this.handleInputChange}
        />
        <Button 
          type={'primary'}
          onClick={this.handleSubmit}
        >
          提交
        </Button>
        <List
          bordered
          style={{width: 300, marginTop: 10}}
          dataSource={[]}
          renderItem={item => (
            <List.Item>{item.value}</List.Item>
            // <TransitionGroup>
            //   {this.getTodoItem(item)}
            // </TransitionGroup>
          )}
        />
      </div>
    );
  }

  getTodoItem(item) {
    return (
      <CSSTransition
      // key不能用index删除时动效会出问题，key应改不重复且稳定
        key={item.uuid}
        timeout={1000}
        classNames={"item"}
      >
        <TodoItem 
          content={item.value} 
          // index={index} 
          handleItemDelete={this.handleItemDelete}
        />
      </CSSTransition>
    )
  }

  // handleInputChange(e) {
  handleInputChange() {
    console.log('handleInputChange')
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
    console.log('handleSubmit')
    this.setState((prevState) => ({
      list: [...prevState.list, {uuid: uuid(), value:prevState.inputValue}],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    console.log('handleItemDelete')
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
}

export default App;
