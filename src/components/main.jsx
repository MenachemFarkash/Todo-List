import React, { Component } from 'react';
import Task from './task';

class Main extends Component {
    state = {
        tasks: [],
    };
    style = {
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column',
        justifyContent: 'center',
        height: '97vh',
        wordWrap: 'break-word',

        container: {
            backgroundColor: '#EDEDED',
            width: 450,
            height: 550,
            border: '2px solid black',
            fontSize: '30px',
            borderRadius: '7px',
            boxShadow: '5px 5px 10px rgb(157, 158, 150)',
        },

        taskList: {
            height: '550px',
            paddingTop: '10px',
            paddingLeft: '10px',
            paddingRight: '10px',
            textAlign: 'center',
        },

        taskNameInput: {
            width: '80%',
            height: '45px',
            fontSize: '30px',
            borderRadius: '7px',
        },
        button: {
            width: '18%',
            fontSize: '30px',
            border: 'none',
            backgroundColor: '#FF8787',
            borderRadius: '7px',
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
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'row',
                        marginTop: '15px',
                        boxShadow: '5px 5px 10px rgb(157, 158, 150)',
                        borderRadius: '7px',
                    }}
                >
                    <input
                        id="taskNameInput"
                        style={this.style.taskNameInput}
                        type="text"
                    />
                    <button
                        onClick={() => this.handleAddTask()}
                        style={this.style.button}
                    >
                        Add
                    </button>
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
