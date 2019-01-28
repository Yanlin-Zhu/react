import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.handleInputChange}/>
          <button>提交</button>
        </div>
        <ul>
          <li>a</li>
        </ul>
      </div>
    )
  }
}

const mapStatesToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        inputValue: e.target.value
      }
      dispatch(action)
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(TodoList);