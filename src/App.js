import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Header} from './layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import {About} from './components/routes/about';
import {Error} from './components/routes/error';
import {Footer} from './layout/Footer'
import {getTodos, deleteTodo, newTodo} from './api/todos';
import './App.css';

class App extends Component {
  
  state = {
    todos: [],
  }

//fetch  todos from json placeholder, and render them by default.
  componentDidMount() {
    getTodos()
      .then(res => this.setState({ todos: res.data }))
  }

//toggle todo, if its not completed set to completed, & vice versa
  handleToggle = (id) => {
    this.setState((prevState) => { 
      return { 
        todos: prevState.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        }) 
      }
    });
  }

//find todo by id, and delete it with filter method
  delTodo = (id) => {
    deleteTodo(id)
      .then(res => this.setState((prevState) => { 
        return {
          todos: [...prevState.todos.filter(todo => todo.id !== id)] 
        };
      }));
  }

//add todo, !here i got problem, every single todo is added to json place holder has same id 201 
  addTodo = (title) => {
    newTodo(title)
    .then(res => this.setState((prevState) => {
      return {
        todos: [...prevState.todos, res.data] 
      }
    }));  
  }

  render() {
    return (
      <Router>
          <div className="container">
            <Header />
             <Switch>
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
              <Route component={Error} />
            </Switch>
          </div>
      </Router>
    );
  }
}
export default App;