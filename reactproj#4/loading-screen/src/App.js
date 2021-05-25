



import React from 'react';
import './App.css';
import Conditional from "./Conditional";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
  
        
    componentDidMount() {
      setTimeout(() => {
          this.setState({
              isLoading: false
          })
      }, 1500)
  }
  
    
    render() {

      const style = {  
        
        backgroundColor: '#7851a9',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      };

      const styles = {
        fontSize: '40px',
        color: '#ffdb58',
        paddingBottom: '100px'
      };

    

        return (
          <div>

  
                
                
                <div style={style}>
                  <label style={styles}>Loading Something Cool...</label>
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45"/>
                  </svg>
                </div>
             
                

          </div>

        )
    }
 
}

export default App

