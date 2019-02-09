import React, { Component } from 'react';
import Task from './Task';



class TaskContainer extends Component {
  state ={
    tasks: [
      {id:1, name: 'odkurzyć', completed: false},
      {id:2, name: 'zrobić zakupy', completed: true},
      {id:3, name: 'Nauczyć się Reacta', completed: false},
  ]
  };
  handleChange = (event, taskId) => {
    // console.log('ngnvf', taskId);
    // console.log(event.target.checked)

    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    const task = {...this.state.tasks[taskIndex]};

    task.completed = event.target.checked

    const tasks = [...this.state.tasks]
    tasks[taskIndex]=task;

    this.setState({tasks: tasks});
   }



    render() {
      return (
        <div className="task-container">
        {this.state.tasks.map(task =>(
          <Task
          key={`task-${task.id}`}
          task={task}
          handleChange={(event)=>this.handleChange(event, task.id)}
          />
          ))}
        </div>
      );
    }
  }
  
  export default TaskContainer;
