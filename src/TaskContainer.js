import React, { Component } from 'react';
import Task from './Task';



class TaskContainer extends Component {

    render() {
      return (
        <div className="task-container">
        {this.props.todos.map(task =>(
          <Task
          key={`task-${task.id}`}
          task={task}
          handleChange={(event)=>this.props.handleChange(event, task.id)}
          handleRemove={() => this.props.handleRemove(task.id)}
          updateHandler={(newName) => this.props.updateHandler(newName, task.id)}
          />
          ))}
        </div>
      );
    }
  }
  
  export default TaskContainer;
