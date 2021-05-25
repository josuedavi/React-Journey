import '../App.css';
import React from 'react';
import TodoItem from "./TodoItem";
import todosData from "../todosData";


class App extends React.Component {
    //initializes class and values
  constructor() {
      super() //goes to super class and allows our component to have functionality
      this.state = {
          todos: todosData
      }
      this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(id) {

    this.setState( prevState =>  {
        const updatedTodos = prevState.todos.map ( todo => {
            if (todo.id === id){
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } 
            return todo;
        });
        console.log(prevState.todos);
    console.log(updatedTodos);
        return {
            todos: updatedTodos
        }
    })
    
}

  render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} handleChange={this.handleChange} item={item}/>)
      
      return (
          <div className="todo-list">
              {todoItems}
          </div>
      )    
  }
}

export default App