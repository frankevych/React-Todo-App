import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTimer from './AddTimer'
import '../App.css'

export class TodoItem extends Component {
  
  // getStyle = () => {
  //   return {
  //     backgroundColor: this.props.todo.completed ? '#DAF7A6' : '',
  //   }
  // }
  todoComplited = () => {
    return this.props.todo.completed ? ' todo-done' : ' todo-undone'
  }

  render() {
    const {id, title, completed} = this.props.todo
    return (
      <div className="list-group">
        <div className= { `alert alert-info ${this.todoComplited()}` }>
          <p className="todo-p">{ title }</p>   
          <div className="btn-group">
            <button className="btn btn-success" onClick={this.props.onToggle.bind(this, id)}> check </button> {' '} 
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
  delTodo: PropTypes.func.isRequired
}
export default TodoItem
