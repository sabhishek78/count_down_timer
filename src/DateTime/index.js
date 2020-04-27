import React from 'react';
import Clock from "../Clock";

class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: "",
            timerList: [],
        }
    };

    handleClick(timer) {
        let timerListCopy = this.state.timerList.slice();
        timerListCopy.push(timer);
        console.log('timer=' + timer);
        this.setState({
            timer: timer,
            timerList: timerListCopy,
        })
        console.log('timerListCopy=' + timerListCopy);
    }



    render() {
        let timer;
        return (
            <div className="clockdiv">
                <div>
                    <label>Choose a date-time for your countdown:</label>
                    <input type="datetime-local" id="timer" onChange={(time) => timer = time.target.value}/>
                    <button className="button" onClick={() => this.handleClick(timer)}>Start Timer</button>
                </div>
                <div>
                    {this.state.timerList.map((item,index) => (<div>
                        <Clock key={item.toString()+index.toString()} deadline={item} deleteTimer={() => {

                            this.state.timerList.splice(this.state.timerList.indexOf(item), 1);
                            this.setState({
                                timerList: this.state.timerList
                            });

                        }}/>
                    </div>))
                    }
                </div>
            </div>
        )
    }
}

export default DateTime