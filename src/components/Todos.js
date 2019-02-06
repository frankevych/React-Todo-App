import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  
  render() {
    //now we can acces to property passed from app.js and its todos array
    //console.log(this.props.todos);
    //map() - highordered array method ,
    //for each (todo) in todos array what we wanna do? => (instruction);
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onClick={this.props.onClick} delTodo={this.props.delTodo} />
      // <p>{todo.id}</p>  - another way to pass props 'children'
      // </TodoItem> }
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}
export default Todos;
