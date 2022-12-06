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
            verticalAlign: 'center',
        },

        taskNameInput: {
            width: '80%',
            height: '45px',
            fontSize: '30px',
            borderRadius: '7px',
            border: '2px solid black',
        },
        button: {
            width: '18%',
            fontSize: '30px',
            border: 'none',
            backgroundColor: '#FF8787',
            borderRadius: '7px',
            border: '2px solid black',
        },
        bottom: {
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'space-between',
            marginTop: '15px',
            boxShadow: '5px 5px 10px rgb(157, 158, 150)',
            borderRadius: '7px',
            width: 450,
        },
        h1: {
            fontSize: '70px',
            marginBottom: '0px',
        },
    };
    render() {
        return (
            <div style={this.style}>
                <h1 style={this.style.h1}>To Do List:</h1>
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
                <div style={this.style.bottom}>
                    <input
                        id="taskNameInput"
                        style={this.style.taskNameInput}
                        type="text"
                        placeholder="Please Write Task Name"
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
        document.getElementById('taskNameInput').value = '';
    }
    disable(event) {
        event.target.disabled = true;
        event.target.parentNode.childNodes[1].style.textDecoration = 'line-through';
    }
}

export default Main;
