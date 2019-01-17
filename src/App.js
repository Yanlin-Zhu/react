import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handelStoreChange = this.handelStoreChange.bind(this)
    store.subscribe(this.handelStoreChange)
  }

  componentDidMount() {
    // ajax请求一般放在这里charles mock数据
    // axios.get('/todolist/get').then((res) => {
    //   this.setState(() => ({list: [...res.data]}))
    // }).catch((error) => {
    //   console.log(error)
    // })
  }

  render() {
    // JSX
    return (
      <div style={{margin: 10}}>
        <Input 
          style={{width: 300, marginRight: 10}}
          placeholder={'todo info'}
          id='insertArea'
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onPressEnter={this.handleSubmit}
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
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
          )}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      inputValue: e.target.value
    }
    store.dispatch(action)
  }

  handelStoreChange() {
    this.setState(store.getState())
  }

  handleSubmit() {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }
}

export default App;
