import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/about';
import Footer from './layout/Footer'
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
      this.state = {
        todos: [],
      }
  }

  //simulates work with db. (json placeholder)
  //componentDidMount lifecycle method, wich will run right after the component is Mounted
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      //gives us a response (res) and then it has a data property attached so it will be res.data (arr)
      .then(res => this.setState({ todos: res.data }))
      console.log(this.state.todos)
  }

  handleClick = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //we need to manipulate our state by removing one of these todos, 
  //and the way we gonna do this is with the filter method its highordered array method
  //it loops through and based on the conditions it will return another array
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  // {todos} = ['...'- copies new array.filtered(with todo's that are not matching id in param.of func)] 
  }

  //add todo
   addTodo = (title) => {
  //gives us a response (res) and then it has a data property attached so it will be res.data (arr)
      axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        title,
        completed: false,
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    }

  render() {
    return (
      <Router>
        <div className="App">
        
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos 
                todos={this.state.todos} 
                onClick={this.handleClick} 
                delTodo={this.delTodo}
              />
              <Footer />
           </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
        </div>
      </Router>
    );
  }
}


export default App;
