import React, { Component } from 'react';

class Plus extends Component {
    state = {
        y: 0,
        x: 0,
        sum: 0,
    };
    render() {
        return (
            <div>
                <input type="text" onChange={(x) => this.xAdd(x)}></input>
                <input type="text" onChange={(y) => this.yAdd(y)}></input>
                <p>{this.state.sum}</p>
            </div>
        );
    }
    xAdd = (x) => {
        return this.setState({ x: x.target.value });
    };
    yAdd = (y) => {
        return this.setState({ y: y.target.value });
    };
}
export default Plus;
