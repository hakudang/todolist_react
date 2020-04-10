import React, { Component } from 'react'
import _ from 'lodash'

// IMPORT COMPONENTS
import Theader from './TaskItems/THeader'
import Item from './TaskItems/Item'
import Search from './TaskItems/Search'

class TaskItems extends Component {
    render() {
        let { tasks, filterType, filterStatus, filterLabel, filterPriority, filterSort, filterSearch } = this.props
        // filter and render
        let filterTasks = []

        switch (filterType) {
            case 'FilterStatus':
                if (filterStatus === -1) { // "Tất cả"
                    filterTasks = tasks
                } else {
                    for (let task of tasks) {
                        if (parseInt(task.status, 10) === filterStatus) {
                            filterTasks = [...filterTasks, task]
                        }
                    }
                }
                break
            case 'FilterLabel':
                if (filterLabel === -1) { // "Tất cả"
                    filterTasks = tasks
                } else {
                    for (let task of tasks) {
                        if (task.labelArr.indexOf(`label_${filterLabel}`) !== -1) {
                            filterTasks = [...filterTasks, task]
                        }
                    }
                }
                break
            case 'FilterPriority':
                if (filterPriority === '-1') { // "Tất cả"
                    filterTasks = tasks
                } else {
                    for (let task of tasks) {
                        if (task.priority === parseInt(filterPriority, 10)) {
                            filterTasks = [...filterTasks, task]
                        }
                    }
                }
                break
            case 'FilterSort':
                if (filterSort === '-1') { // "không sort" 
                    filterTasks = tasks
                }
                if (filterSort === '1') {
                    filterTasks = _.orderBy(tasks, ['name'], ['asc'])
                }
                if (filterSort === '2') {
                    filterTasks = _.orderBy(tasks, ['name'], ['desc'])
                }
                break
            case 'FilterSearch':
                filterTasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1
                })
                console.log(filterTasks);            
                break
            default:
                filterTasks = tasks
                break

        }

        // let elementItem = this.props.tasks.map((item, index) => {
        let elementItem = filterTasks.map((item, index) => {
            return < Item
                key={index}
                item={item}
                index={index}
                onEditTask={this.props.onEditTask}
                // filter status
                changeStatus={this.props.changeStatus}
            />
        })
        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                    <div className="row header header--right d-flex align-items-center mx-0">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between">
                                <h3 className="text-left ml-2 ">DANH SÁCH CÔNG VIỆC</h3>
                            </div>
                        </div>
                        {/* Search */}
                        <Search
                            changeFilterSearch={this.props.changeFilterSearch}
                        />

                    </div>
                </div>
                {/* <div className="px-3"> */}
                <div>
                    <table className="table table-hover">
                        {/* Table Header */}
                        <Theader />
                        <tbody>
                            {/* Table row - Item */}
                            {elementItem}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TaskItems