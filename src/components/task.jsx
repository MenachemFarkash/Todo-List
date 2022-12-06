import React, { Component } from 'react';

class Task extends Component {
    style = {
        checkbox: {
            transform: 'scale(2)',
            marginLeft: 10,
            marginRight: 20,
            verticalAlign: 'middle',
        },
    };
    render() {
        return (
            <div style={this.style.div}>
                <input
                    style={this.style.checkbox}
                    type="checkbox"
                    onChange={this.props.disable}
                ></input>

                <label htmlFor="chckbox" id={this.props.name}>
                    {this.props.name}
                </label>
                <br />
            </div>
        );
    }
}

export default Task;
