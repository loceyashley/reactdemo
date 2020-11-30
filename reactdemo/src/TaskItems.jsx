import React, {Component} from 'react';
import TaskList from './TaskList';

class TaskItems extends Component{
    render(){
        const {tasks, buttonFunction }= this.props;
        return (
            <div onClick={() => buttonFunction(tasks)}>
                <div class = "TasksN">
                <ul class="list-group">
                 <li class="list-group-item"> {tasks}</li>
                </ul>
                </div>
            </div>
        )
    }
}

export default TaskItems;

