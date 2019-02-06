import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
    }
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
    //onSubmitHandler since its Submit event , it will try to submit to an actual file so we wanna e.prevetDefault
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
                        //value without onChange - error cause it should be handled
                        //value attribute triggeres onchange event, thats why we should create eventhandler
                        value={this.state.title} 
                        //thats why we created function called handleChange - to handle Event
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