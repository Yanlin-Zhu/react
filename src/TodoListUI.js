import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  // JSX
  render() {
    return (
      <div style={{margin: 10}}>
        <Input 
          style={{width: 300, marginRight: 10}}
          placeholder={'todo info'}
          id='insertArea'
          value={this.props.inputValue}
          onChange={this.props.handleInputChange}
          onPressEnter={this.props.handleSubmit}
        />
        <Button 
          type={'primary'}
          onClick={this.props.handleSubmit}
        >
          提交
        </Button>
        <List
          bordered
          style={{width: 300, marginTop: 10}}
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>
          )}
        />
      </div>
    );
  }
}
export default TodoListUI