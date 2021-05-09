import React from "react";


function Joke(props) {
    return (
  
          <div className="card">
          
            <div className="card-body">
              <h5 className="card-title">{props.question}</h5>
              <p className="card-text">{props.punchline}</p>
              
            </div>
          </div>
        );
}

export default Joke;