import React from 'react';
class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer:"",
            timerList: [],
            timeRemainingList:[]
        }
    };
  handleClick(timer){
      let timerListCopy = this.state.timerList.slice();
      timerListCopy.push(timer);
      let timeRemainingListCopy=this.state.timeRemainingList.slice();
      timeRemainingListCopy.push(this.getTimeRemaining(timer));
      console.log('timer='+timer);
          this.setState({
              timer:timer,
              timerList:timerListCopy,
              timeRemainingList:timeRemainingListCopy,
})
console.log('timerListCopy='+timerListCopy);
for(let i=0;i<timeRemainingListCopy.length;i++){
    console.log(timeRemainingListCopy[i]["days"]+"days"+timeRemainingListCopy[i]["hours"]+"hours"+timeRemainingListCopy[i]["minutes"]+"minutes"+
        timeRemainingListCopy[i]["seconds"]+"seconds");
}
}
getTimeRemaining(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );

        return {
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    
  render() {
        var timer;
        return (
            <div className="clockdiv">
                <div>
                    <label >Choose a date-time for your countdown:</label>
                    <input type="datetime-local" id="timer" onChange={(time)=> timer=time.target.value}/>
                    <button className="button" onClick={()=>this.handleClick(timer)}>Start Timer</button>
                </div>
                <div>
                    {this.state.timerList.map((item, index) => (<div>
                        <button >
                            {this.state.timeRemainingList[index]["days"]}days
                            {this.state.timeRemainingList[index]["minutes"]}minutes
                            {this.state.timeRemainingList[index]["hours"]}hours
                            {this.state.timeRemainingList[index]["seconds"]}seconds
                        </button>
                        </div>))
                }
            </div>
            </div>

        )
    }
}
export default DateTime