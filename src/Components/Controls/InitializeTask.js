// rcc - react component class = stateful component
import React, { Component } from 'react';

class InitializeTask extends Component {
    initializeTask = () => {
        this.props.generateData()
    }
    render() {
        return (
            // Upload data from LocalStorage button
            <button
                type="button"
                // className="btn my-3 btn--initializeTask"
                className="btn my-3 btn-outline-primary"
                // data-toggle="modal"
                // data-target="#modalTask"
                onClick={this.initializeTask}
            >
                {/* <i className="fa fa-pencil-square-o" /> */}
                <i class="uil uil-upload"/>   
            </button>
        );
    }
}

export default InitializeTask;