import React, { Component } from 'react';


class Task extends Component {

    render() {
        const styles = this.props.task.completed
            ? { textDecoration: 'line-through' }
            : {};

        return (
            <div className="task">


                <p style={styles}>

                    {this.props.task.name}

                    <input
                        type="checkbox"
                        checked={this.props.task.completed}
                        onChange={this.props.handleChange}
                    />

                    <button onClick={this.props.handleRemove}>x</button>

                </p>



            </div>
        )
    }
}

export default Task;