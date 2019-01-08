import React, { Component, Fragment } from 'react';
import './App.css';
import TodoItem from './TodoItem'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    // JSX
    return (
      <Fragment>
        <label htmlFor='insertArea'>输入内容</label>
        <input 
          id='insertArea'
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              // return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
              return <TodoItem content={item}/>
            })
          }
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default App;
