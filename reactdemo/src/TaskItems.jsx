import React, {Component} from 'react';
import TaskList from './TaskList';

class TaskItems extends Component{
    render(){
        const {tasks, buttonFunction }= this.props;
        return (
            <div onClick={() => buttonFunction(tasks)}>
                {tasks}
            </div>
        )
    }
}

export default TaskItems;