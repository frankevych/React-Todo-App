import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTimer from './AddTimer'
import '../App.css'

export class TodoItem extends Component {
  
  todoCompleted = () => {
    return this.props.todo.completed ? ' todo-done' : ' todo-undone'
  }

  render() {
    const {id, title, completed} = this.props.todo
    return (
      <div className="list-group">
        <div className= { `alert alert-info ${this.todoCompleted()}` }>
          <div className="todo-div">
            {title}
          </div>   
          <div className="btn-group">
            <button className="btn btn-success" onClick={this.props.onToggle.bind(this, id)}> check </button>
            <AddTimer completed={completed} />
            <button className="btn btn-info" onClick={this.props.delTodo.bind(this, id)}> X </button>
          </div>                   
        </div>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}
export default TodoItem
