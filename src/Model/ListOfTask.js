export default class ListOfTask {
    constructor() {
        this.list = []
    }

    // thêm công việc
    addTask = (task) => {
        this.list = [...this.list, task ]
    }

    // Tìm kiếm công việc - trả về task
    findTask = (id) => {
        for ( let task of this.list){
            if (task.id === id) {
                return task
            }
        }
        return null
    }

    // Tìm kiếm công việc - trả về index 
    findTaskIndex = (id) => {
        for ( let index in this.list){
            if (this.list[index].id === id) {
                return index
            }
        }
        return null
    }

}