import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            counter: false
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.counter){
            this.setState({ counter: !this.state.counter})
            setInterval(() => {
                if(!this.props.completed){
                    if(this.state.seconds === 60){
                        this.setState({ seconds: 0, minutes: this.state.minutes + 1 })
                    }
                    if(this.state.minutes === 60){
                        this.setState({ minutes: 0, hours: this.state.hours + 1 });
                    }
                    this.setState({ seconds: this.state.seconds +1 })
                } else {
                    clearInterval()
                }
            }, 1000);
        } else if (this.props.completed){
            alert("undo todo first =)")
        } else {
            alert("timer is running already")
        }
    }

    render() {
        const {seconds, minutes, hours} = this.state
        return (
            <button 
                className="btn btn-secondary pull-right" 
                onClick={this.handleSubmit}
            >
                {hours} : {minutes} : {seconds}
            </button>
        )        
    }
}
AddTimer.propTypes = {
    completed: PropTypes.bool.isRequired
}

export default AddTimer