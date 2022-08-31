import React from 'react';
import SearchBox from './Components/SearchBox';
import TodoListView from './Components/TodoListView';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      todoItems : [], 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    const content = e.target.value;
    this.setState({
      content
    })
  }

  handleDelete(id) {
    const {todoItems} = this.state;

    const newTodoItems = todoItems.filter(item => item.id !== id);
    this.setState({
      todoItems: newTodoItems
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const {content, todoItems} = this.state;
    if(!content) {
      throw "Enter item name"
    } else {
      const newTodoItem = {
        value: content, 
        id: Date.now(),
      }
  
      const newTodoItems = [...todoItems, newTodoItem];
      this.setState({
        todoItems: newTodoItems, 
        content: ""
      })
    }
  }

  render() {

    const {content, todoItems} = this.state;

    return (
      <>
        <SearchBox content = {content} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
        <TodoListView handleDelete = {this.handleDelete} todoItems = {todoItems}/>
      </>
    )
  }

}

export default App;
