import React, { Component } from 'react';
import Task from './Task';



class TaskContainer extends Component {
  state ={
    tasks: [
      {id:1, name: 'odkurzyć', completed: false},
      {id:2, name: 'zrobić zakupy', completed: true},
      {id:3, name: 'Nauczyć się Reacta', completed: false},
  ]
  }

    render() {
      return (
        <div className="task-container">
        {this.state.tasks.map(task =>(
          <Task 
          key={`task-${task.id}`}
          task={task}
          />
          ))}
        </div>
      );
    }
  }
  
  export default TaskContainer;
