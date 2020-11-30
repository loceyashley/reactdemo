import 'bootstrap/dist/css/bootstrap.css';
import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: ['get milk', 'pickup order'],
            completedList: ['walk 30 minutes'],
            task: ''
        }
    }
    render(){
        return (
            <div className="App">
                <h1 id ="titleName">To-do List</h1>
                <h2 id = "Welcome">Welcome to the React Task List!</h2>
                <form id ="f" onSubmit={(e) =>this.addTodo(e)}>
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter Todo Item'
                        value={this.state.task}
                        onChange={(e) => this.setState({task: e.target.value})}
                    />
                    <button type='submit'>Add Todo</button>
                </form>
                    <TaskList title={'Pending Todo'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo} />
                <TaskList title={'Completed'} buttonText={"Delete"} tasks={this.state.completedList} buttonFunction={this.deleteTodo} />

                <h3>When you are completed with the task click on it to move it to your completed list!</h3>
                <h4>When you want to clear tasks on your completed list, simply click on it!</h4> 
            </div>

        );
    }
    addTodo(e){ 
        e.preventDefault();
        this.setState({task: '', todoList: [ ...this.state.todoList, this.state.task] });
    }
    removeTodo = key =>{
        let completedList = this.state.completedList;
        let todoList = this.state.todoList;
        let index = todoList.indexOf(key);
        if(index > -1){
           todoList.splice(index, 1);
            completedList.push(key);
            this.setState({todoList: todoList})
        }
    }

    deleteTodo = key =>{
        let completedList = this.state.completedList;
        let index = completedList.indexOf(key);
        if(index > -1){
            completedList.splice(index, 1);
            this.setState({completedList: completedList})
        }
    }
}

export default App;