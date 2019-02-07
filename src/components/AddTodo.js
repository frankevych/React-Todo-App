import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
    }
    // user input is setting directly to title state. 
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    // onSubmit we are passing addTodo function with title state to app.js where it will be handled., and after clear title state.
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="text" 
                        name="title" 
                        placeholder="Add steps ..."
                        value={this.state.title} 
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo