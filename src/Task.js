import React, { Component } from 'react';


class Task extends Component {

    state = {
        editMode: false
    }

    handleChange = (event)=>{
        this.setState({name: event.target.value})
        console.log(event.target.value)
    }

    keyDown = (event) => {
        if (event.keyCode === 13){
            //this.props.createHandler(this.state.name);
            this.setState({name: ''})
        }
    }


    handleClick = () => {
        this.setState({ editMode: true });
    }

    renderTask() {
        if (this.state.editMode){
            return <input type="text" defaultValue={this.props.task.name} onChange={this.handleChange} onKeyDown={this.keyDown}/>
        }
        return <span onClick={this.handleClick}>{this.props.task.name}</span>
    }

    render() {
        const styles = this.props.task.completed
            ? { textDecoration: 'line-through' }
            : {};

        return (
            <div className="task">


                <p style={styles}>

                    {this.renderTask()}

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