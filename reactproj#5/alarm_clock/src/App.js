import React from 'react';
import Clock from './Clock';

import AppBar from './Form';
import './App.css';


class App extends React.Component {
  render() {
    const clockStyle = {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: "30px",
      color: "#ADEFD1FF",
      backgroundColor: "#00203FFF"
    }
    return (
      <div>
        <div style={clockStyle}>
        <Clock />
      
         <AppBar />
       </div>  
       
      </div>
      
     
    );
  }
}



export default App;
