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
    
    // logic of timer | when timer is clicked  (something is wrong (in console if try to delete todo while timer is working, we'll see warning about memory leak))
    // before deleting todo we need to clearInterval()? but how to perform it?
    handleSubmit = (e) => {
        e.preventDefault();
        //check if counter is false (need conter to prevent bug with multiple clicks, which will case multiplying work of this function on the same timer.)
        if(this.state.counter === false) {
            //if false, set it to true
            this.setState({ counter: !this.state.counter })
            //every 1000ms
            setInterval(() => {
                //check if todo is not completed (see PropTypes below)(if false keep working)
                if(this.props.completed === false){
                    //when timer reaches 60 seconds
                    if(this.state.seconds === 60){
                        this.setState({ seconds: 0, minutes: this.state.minutes + 1 })
                    }
                    if(this.state.minutes === 60){
                        //same as with seconds above
                        this.setState({ minutes: 0, hours: this.state.hours + 1 });
                    }
                    //increment every 1000ms state.second +1
                    this.setState({ seconds: this.state.seconds +1 })
                 } else {
                     clearInterval()
                 }
            }, 1000);
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