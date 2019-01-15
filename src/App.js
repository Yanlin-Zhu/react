import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleItemDelete = this.handleItemDelete.bind(this)
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
          renderItem={item => (
            <List.Item>{item}</List.Item>
          )}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      inputValue: e.target.value
    }
    store.dispatch(action)
  }

  handelStoreChange() {
    this.setState(store.getState())
  }

  handleSubmit() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

  // handleItemDelete(index) {
  //   this.setState((prevState) => {
  //     const list = [...prevState.list]
  //     list.splice(index, 1)
  //     return {list}
  //   })
  // }
}

export default App;
