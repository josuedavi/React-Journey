import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.subOne = this.subOne.bind(this);
    this.addOne = this.addOne.bind(this);
  }
  
  addOne() {
    this.setState(prevState => {
        return {
            count: prevState.count + 1
        }
    })
}

  subOne() {
    this.setState(prevState => {
        return {
            count: prevState.count - 1
        }
    })
}
  

  render() {
    return (
      <div>
       
      <div className="btn">
        
       </div>  
       <div className="card">  
       <h1 className="count">{this.state.count}</h1>
       <div className="btn">
      <button className="btn btn-success" onClick={this.addOne}>Add One</button>
           
      <button className="btn btn-danger" onClick={this.subOne}>Sub One</button>
       </div>
       
       </div>
       
       
       
      </div>
      
    );
  }
}

export default App;
