import React, { Component } from 'react';
import Task from './task';

class Main extends Component {
    state = {
        tasks: [],
    };
    style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '97vh',

        container: {
            backgroundColor: 'gray',
            width: 450,
            height: 550,
            border: '2px solid black',
            fontSize: '30px',
        },
        taskList: {
            height: '550px',
        },
    };
    render() {
        return (
            <div style={this.style}>
                <div style={this.style.container}>
                    <div>
                        <div style={this.style.taskList}>
                            {this.state.tasks.map((task, index) => {
                                return (
                                    <Task
                                        key={index}
                                        name={task.name}
                                        disable={this.disable}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <input
                            id="taskNameInput"
                            style={{
                                width: '80%',
                                height: '50px',
                                marginTop: '20px',
                                fontSize: '30px',
                            }}
                            type="text"
                        />
                        <button
                            onClick={() => this.handleAddTask()}
                            style={{ width: '18%', height: '50px', fontSize: '30px' }}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    handleAddTask() {
        if (!document.getElementById('taskNameInput').value == '')
            this.state.tasks.push({
                name: document.getElementById('taskNameInput').value,
            });
        this.setState({ tasks: this.state.tasks });
    }
    disable(event) {
        event.target.disabled = true;
        event.target.parentNode.childNodes[1].style.textDecoration = 'line-through';
    }
}

export default Main;
