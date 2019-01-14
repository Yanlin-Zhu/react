import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // 性能优化防止父组件render执行时子组件数据未发生变化也执行render函数，防止生成不必要的虚拟DOM做比对
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps.content, this.props.content)
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentWillUpdate() {
    console.log(123)
  }
  render() {
    console.log(231)
    const { content } = this.props
    return (
      <Fragment>
        <li onClick={this.handleClick}>
          {content}
        </li>
      </Fragment>
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