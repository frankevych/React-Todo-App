import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTimer from './AddTimer'

export class TodoItem extends Component {

  getStyle = () => {
    return {
      backgroundColor: this.props.todo.completed ? '#DAF7A6' : '',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  render() {
    //pulled out properties of todo item, so we refer to them directly without writing full path 
    /* bind(this = this means component(clss)) were telling who will call this method, which component */
    const {id, title, completed} = this.props.todo
    return (
      <div className="list-group list-group-flush">
        <div className="alert alert-info" style={this.getStyle()}>
          <button className="btn btn-success" onClick={this.props.onClick.bind(this, id)}> status </button> {' '} 
          { title }                      
            <button className="btn btn-info pull-right" onClick={this.props.delTodo.bind(this, id)}> remove </button>
            <AddTimer completed={completed} />
        </div>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}
export default TodoItem
