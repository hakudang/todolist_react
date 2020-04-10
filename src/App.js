// run : npm start

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import randomID from 'randomid'

// IMPORT COMPONENT
import ModalPopup from './Components/ModalPopup'
import Controls from './Components/Controls'
import TaskItems from './Components/TaskItems'

import listOfTask from './Model/getDate' // data stored in file

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      taskEditing: null,
      isAddNewTask: true,
      // filter
      filterType: '',
      filterStatus: -1, // -1 = Tất cả
      filterLabel: -1,
      filterPriority: -1,
      filterSort: -1,
      filterSearch: ''
    }
  }

  // 1. get data từ localStorage - Usage: khi load page
  componentWillMount = () => {
    let tasksJSON = JSON.parse(localStorage.getItem('tasks'))
    this.setState({
      tasks: tasksJSON
    })
  }

  // console.log(listOfTask.list);

  // 2. transfer data to System Local Storage
  generateData = () => {
    localStorage.setItem('tasks', JSON.stringify(listOfTask.list))
    // get data from LocalStorage
    let tasksJSON = JSON.parse(localStorage.getItem('tasks'))
    // render state
    this.setState({
      tasks: tasksJSON
    })
  }

  // 3.1 Switch to edit task ON- Usage : click Edit Task button
  onAddNewTask = () => {
    this.setState({
      isAddNewTask: true,
    })
  }

  // 3.2 New Task - Usage : click Add Task button
  // truyền addNewTask props cho PopUpModal dưới dạng 1 hàm, 
  // và nhờ đó lấy dữ liệu trả về để add new task
  addNewTask = (data) => {
    // console.log("addNewTask");

    if (this.state.isAddNewTask) {
      data.id = randomID(5)
      // console.log(data);

      // a. get data from LocalStorage
      let tasksJSON = JSON.parse(localStorage.getItem('tasks'))

      // b. add new data
      tasksJSON = [...tasksJSON, data]

      // c. render state
      this.setState({
        tasks: tasksJSON
      })

      // c. set data for LocalStorage
      localStorage.setItem('tasks', JSON.stringify(tasksJSON))
    }
  }

  // 4.1 Switch to edit task ON- Usage : click Edit Task button
  onEditTask = (data) => {
    // console.log(data); // kiem tra data co tra ve khi click Edit button?
    this.setState({
      isAddNewTask: false,
      taskEditing: data // data nhan tu Children to update DB
    })
  }

  // 4.2 Edit Task
  editTask = (data) => {
    // console.log("editTask");
    if (!this.state.isAddNewTask) {
      // a. get data from LocalStorage
      let tasksJSON = JSON.parse(localStorage.getItem('tasks'))

      // b. find and update task
      for (let i in tasksJSON) {
        if (tasksJSON[i].id === data.id) {
          console.log(i);
          // tasksJSON[i].id = data.id
          tasksJSON[i].name = data.name
          tasksJSON[i].priority = data.priority
          tasksJSON[i].labelArr = data.labelArr
          tasksJSON[i].status = data.status
          tasksJSON[i].desc = data.desc
          tasksJSON[i].memberIdArr = data.memberIdArr
        }
      }

      // c. render state
      this.setState({
        tasks: tasksJSON
      })

      // d. set data for LocalStorage
      localStorage.setItem('tasks', JSON.stringify(tasksJSON))
    }
  }
  // 5. change status in Item 
  changeStatus = (id, status) => { // nhan id, status từ Children
    // a. get data from LocalStorage
    let tasksJSON = JSON.parse(localStorage.getItem('tasks'))

    // b. find and update task
    for (let i in tasksJSON) {
      if (tasksJSON[i].id === id) {
        tasksJSON[i].status = status
      }
    }
    // c. render state
    this.setState({
      tasks: tasksJSON
    })

    // d. set data for LocalStorage
    localStorage.setItem('tasks', JSON.stringify(tasksJSON))

  }

  // 6.1 filter status 
  changeFilterStatus = (filterStatus) => {
    // console.log(filterStatus);
    // set state
    this.setState({
      filterType: 'FilterStatus',
      filterStatus: filterStatus
    })
  }
  // 6.2 filter label
  changeFilterLabel = (filterLabel) => {
    // console.log(filterLabel);
    // set state
    this.setState({
      filterType: 'FilterLabel',
      filterLabel: filterLabel
    })
  }

  // 6.3 filter priority
  changeFilterPriority = (filterPriority) => {
    // console.log(filterPriority);
    // set state
    this.setState({
      filterType: 'FilterPriority',
      filterPriority: filterPriority
    })
  }
  // 6.4 filter sort
  changeFilterSort = (filterSort) => {
    // console.log(filterSort);
    // set state
    this.setState({
      filterType: 'FilterSort',
      filterSort: filterSort
    })
  }
  // 6.4 filter search
  changeFilterSearch = (filterSearch) => {
    console.log(filterSearch);
    // set state
    this.setState({
      filterType: 'FilterSearch',
      filterSearch: filterSearch
    })
  }

  render() {
    // ES6
    // let { tasks } = this.state
    let { tasks, isAddNewTask, taskEditing, filterType, filterStatus, filterLabel, filterPriority, filterSort, filterSearch } = this.state
    return (
      <div>
        <h3 className="text-left my-2 ml-2">QUẢN LÝ CÔNG VIỆC</h3>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Controls
              generateData={this.generateData}
              onAddNewTask={this.onAddNewTask}
              //filter status
              changeFilterStatus={this.changeFilterStatus}
              //filter label
              changeFilterLabel={this.changeFilterLabel}
              // filter priority
              changeFilterPriority={this.changeFilterPriority}
              // filter sort
              changeFilterSort={this.changeFilterSort}
            />
            {/* DISPLAY */}
            <TaskItems
              // tasks={listOfTask.list}
              tasks={tasks} // destructuring ES6
              filterType={filterType}
              filterStatus={filterStatus}
              filterLabel={filterLabel}
              filterPriority={filterPriority}
              filterSort={filterSort}
              filterSearch={filterSearch}
              // tạo props -> nhận task từ cấp Children
              onEditTask={this.onEditTask}
              // 
              changeStatus={this.changeStatus}
              // filter search
              changeFilterSearch={this.changeFilterSearch}


            />
          </div>
        </div>
        {/* The Modal */}
        <ModalPopup
          addNewTask={this.addNewTask}
          isAddNewTask={isAddNewTask}
          taskEditing={taskEditing}
          editTask={this.editTask}
        />
      </div>
    );
  }
}

export default App;
