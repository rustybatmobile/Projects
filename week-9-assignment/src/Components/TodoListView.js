import React from 'react';
import TodoItem from './TodoItem';

class TodoListView extends React.Component {

    render() {
        const {todoItems, handleDelete} = this.props;

        return (
            <>
                {
                    todoItems.map(item => {
                        return (
                           <TodoItem key = {item.id} handleDelete = {handleDelete} item= {item}/>
                        )
                    })
                }
            </>
        )
    }
}

export default TodoListView