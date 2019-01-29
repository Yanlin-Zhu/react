import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { getInputChangeACtion, getAddItemACtion, getDeleteItemACtion } from './store/actionCreators'

class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.handleInputChange}/>
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return <li key={uuid()} onClick={this.props.handleDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStatesToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getInputChangeACtion(e.target.value)
      dispatch(action)
    },

    handleClick() {
      const action = getAddItemACtion()
      dispatch(action)
    },

    handleDelete(index) {
      const action = getDeleteItemACtion(index)
      dispatch(action)
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(TodoList);