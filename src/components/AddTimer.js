import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        setInterval(() => {
            const {seconds, minutes} = this.state
            if(this.props.completed === false){
                if(seconds === 60){
                    this.setState((prevState) => {
                        return {
                            seconds: 0, 
                            minutes: prevState.minutes + 1,
                        } 
                    });
                }
                if(minutes === 60){
                    this.setState((prevState) => {
                        return {
                            minutes: 0, 
                            hours: prevState.hours + 1,
                        }
                    });
                }
                this.setState((prevState) => {
                    return {
                        seconds: prevState.seconds +1 
                    } 
                });
            };
        }, 1000);
    }

    render() {
    const {seconds, minutes, hours} = this.state
        return (
            <button 
                className="btn btn-secondary pull-right" 
                onClick={this.handleSubmit}
            >   
                <p className="p-0 m-0">
                    {hours} : {minutes} : {seconds}
                </p>
            </button>
        )        
    }
}

AddTimer.propTypes = {
    completed: PropTypes.bool.isRequired
}

export default AddTimer