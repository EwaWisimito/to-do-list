import React, { Component } from 'react';
import TaskContainer from './TaskContainer';
import CreateTask from './CreateTask';

class App extends Component {

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

   handleCreate = (name) => {
     const uuID = Math.floor(Math.random() * 1000000);
     const tasks = [...this.state.tasks];
     const task = {id: uuID , name: name, completed: false};
     tasks.push(task);
     this.setState({tasks: tasks});
   }
   handleRemove = (taskId) => {
     const taskIndex = this.state.tasks.findIndex(task=> task.id === taskId)
     const tasks  = [...this.state.tasks]
     tasks.splice(taskIndex, 1);
     this.setState({tasks});

   }
   updateHandler =  (newName, taskId) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    const task = {...this.state.tasks[taskIndex]};

    task.name = newName;

    const tasks = [...this.state.tasks]
    tasks[taskIndex]=task;

    this.setState({tasks: tasks});
   }

  render() {
    return (
      <div className="App">
      <CreateTask
      createHandler={this.handleCreate}
      />
      <TaskContainer
       todos={this.state.tasks}
       handleChange = {this.handleChange}
       handleRemove = {this.handleRemove}
       updateHandler = {this.updateHandler}
       />

      </div>
    );
  }
}

export default App;
