import React from 'react';
import './App.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            alarmTime: "",
            alarmOn: false
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }


  render() {
    const style = {
        fontSize: "70px"
    }
    return (
      <div>
        <h1 className="clock" style={style}>{this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;
