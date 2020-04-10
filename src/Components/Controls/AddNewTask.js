// rcc - react component class = stateful component
import React, { Component } from 'react';

class AddNewTask extends Component {
    handleOnAddNewTask = () => {
        this.props.onAddNewTask()
    }
    render() {
        return (
            // Tạo Task mới button
            <button           
                style={{marginLeft:"10px"}}
                type="button"
                // className="btn my-0 btn--newTask"
                className="btn my-3 btn-outline-primary"
                data-toggle="modal"
                data-target="#modalTask"
                onClick={this.handleOnAddNewTask}
            >
                {/* <i className="fa fa-pencil-square-o" /> */}
                <i class="uil uil-plus"/>              
            </button>

        );
    }
}

export default AddNewTask;