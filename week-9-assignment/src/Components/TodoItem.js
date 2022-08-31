import React from 'react';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            done: false,
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    }

    handleMarkAsDone() {
        this.setState(prevState => {
            return {
                done: !prevState.done
            }
        })
    }

    handleDelete() {
        const {handleDelete, item} = this.props;
        handleDelete(item.id);
    }

    render() {

        const {item} = this.props;
        const {done} = this.state;
        
        return (
            <>
                <div>{item.value}</div>
                <button onClick={this.handleDelete}>Delete</button>
                {!done ? <button style={{backgroundColor: "greenyellow"}} onClick={this.handleMarkAsDone}>Mark as done</button> : <button style={{backgroundColor: "aqua"}} onClick={this.handleMarkAsDone}>Mark not done</button>}
            </>
        )
    }
}

export default TodoItem