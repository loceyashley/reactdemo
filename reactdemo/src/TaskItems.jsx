import React, {Component} from 'react';
import TaskList from './TaskList';

class TaskItems extends Component{
    render(){
        const {tasks }= this.props;
        return (
            <div>
                {tasks}
            </div>
        )
    }
}

export default TaskItems;