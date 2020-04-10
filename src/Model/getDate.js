import Task from './Task'
import ListOfTask from './ListOfTask'
import TasksData from './TasksData'

let listOfTask = new ListOfTask()

// transfer data from TasksData to listOfTask object variable to perform
for (let task of TasksData){
    let id = task.id
    let name = task.name
    let priority = task.priority
    let labelArr = task.labelArr
    let status = task.status
    let desc = task.desc
    let memberIdArr = task.memberIdArr

    // define new task
    let newTask = new Task(id, name, priority, labelArr, status, desc, memberIdArr)
    listOfTask.addTask(newTask)

}

export default listOfTask