import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const newTodo = {...this.state, id: uuid(), completed: false};
        this.props.createTodo(newTodo);
        this.setState({task: ''})
    }
    render() {
        return (
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                        <label htmlFor='task'>New Todo</label>
                        <input 
                            placeholder="New Todo"
                            type='text'
                            id='task'
                            name='task'
                            value={this.state.task}
                            onChange={this.handleChange}
                        />  
                    <button>Add Todo</button>
                </form>
        )
    }
}

export default NewTodoForm;