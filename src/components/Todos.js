import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  
  render() {
    //for each todo in todos arr, render TodoItem
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onToggle={this.props.onToggle} delTodo={this.props.delTodo} />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}
export default Todos;
