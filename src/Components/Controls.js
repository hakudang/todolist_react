import React, { Component } from 'react'

// IMPORT COMPONENT
import AddNewTask from './Controls/AddNewTask'
import InitializeTask from './Controls/InitializeTask'
import FilterStatus from './Controls/FilterStatus'
import FilterLabel from './Controls/FilterLabel'
import FilterPriority from './Controls/FilterPriority'
import Sort from './Controls/Sort'

class Controls extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.png" className="ml-2 user" alt="user" />
                    <h5 className="text-white d-inline font-weight-light ml-2">
                        Nguyễn Văn Minh
                    </h5>
                </div>

                {/* Initialize Task */}
                <InitializeTask
                    // truyen data vao InitializeTask component
                    generateData={this.props.generateData}
                />

                {/* Add New Task */}
                <AddNewTask
                    onAddNewTask={this.props.onAddNewTask}
                />

                {/* Filter and Sort*/}
                <div className="px-3">
                    {/* Filter progress */}
                    <FilterStatus
                        changeFilterStatus={this.props.changeFilterStatus}
                    />

                    {/* Filter label */}
                    <FilterLabel
                        changeFilterLabel={this.props.changeFilterLabel}
                    />

                    {/* Filter priority */}
                    <FilterPriority
                        changeFilterPriority={this.props.changeFilterPriority}
                    />

                    {/* Sort */}
                    <Sort
                        changeFilterSort={this.props.changeFilterSort}
                    />
                </div>
            </div>
        )
    }
}
export default Controls