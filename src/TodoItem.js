import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content } = this.props
    return (
      <li onClick={this.handleClick}>
        {content}
      </li>
    )
  }

  handleClick() {
    const { handleItemDelete, index } = this.props
    handleItemDelete(index)
  }
}
// 类型强校验
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleItemDelete: PropTypes.func.isRequired,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  content: ''
}

export default TodoItem