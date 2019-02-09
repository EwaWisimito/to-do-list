import React, { Component } from 'react';


class Task extends Component{
    handleChange = (event) => {
        console.log('ngnvf');
        
        this.props.task.complete = event.target
    }
    render(){
        const styles = this.props.complete
        ? {textDecoration: 'line-through'}
        : {};

        return(
            <div className="task">
            {
                <p style={styles}>
                {this.props.task.name}
                <input
                type="checkbox"
                checked={this.props.task.completed}
                onChange={this.handleChange}
                />
                </p>
             }
            </div>
        )
    }
}

export default Task;