import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
import Footer from './layout/Footer'
import './App.css';
import {getTodos, deleteTodo, newTodo} from './api/todos';

class App extends Component {

    state = {
      todos: [],
    }

  //fetch 10 todos, from json placeholder, and render them by default.
  componentDidMount() {
    getTodos()
      .then(res => this.setState({ todos: res.data }))
  }

  //toggle todo, if its not completed set to completed, & vice versa
  handleToggle = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }


//find todo by id, and delet it with filter method
  delTodo = (id) => {
    deleteTodo(id)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  //add todo, !here i got problem, every single todo is added to json place holder has same id 201 
   addTodo = (title) => {
      newTodo()
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos 
                todos={this.state.todos} 
                onToggle={this.handleToggle} 
                delTodo={this.delTodo}
              />
              <Footer />
           </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}


export default App;
