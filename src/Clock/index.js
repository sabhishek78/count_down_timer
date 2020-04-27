import React, { Component } from 'react';
import "./clock.css"

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            alert:false,
        };
    }
    componentDidMount() {

      this.interval=setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time <-3) {
            this.setState({alert:false});
            this.props.deleteTimer();
        }
        else if(time <=0 && time>=-3) {
            this.setState({alert:true});
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({ days, hours, minutes, seconds });
        }

    }

    render() {
           if(this.state.alert){
               return(<div>ALERT</div>);
           }
           else{
               return (
                   <div className="Clock">
                       <div className="Clock-days">{this.leading0(this.state.days)} Days</div>
                       <div className="Clock-hours">{this.leading0(this.state.hours)} Hours</div>
                       <div className="Clock-minutes">{this.leading0(this.state.minutes)} Minutes</div>
                       <div className="Clock-seconds">{this.leading0(this.state.seconds)} Seconds</div>
                   </div>
               );
           }
    }
}

export default Clock;