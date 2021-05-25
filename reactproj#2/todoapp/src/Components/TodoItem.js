import '../App.css';
import React from 'react';


class TodoItem extends React.Component {
    
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return (
            <div className="todo-item">
                <input className="item" type="checkbox" onChange={() => this.props.handleChange(this.props.item.id)} checked={this.props.item.completed} />
              <label style={this.props.item.completed ? completedStyle : null }>  {this.props.item.text}</label>
            </div>
        );
    }
}
export default TodoItem;
