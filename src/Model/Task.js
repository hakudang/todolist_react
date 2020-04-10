// Schema Task - Đối tượng hứng dữ liệu TaskOfData

export default class Task {
    constructor(id, name, priority, labelArr, status, desc, memberIdArr ){
        this.id = id
        this.name = name
        this.priority = priority
        this.labelArr = labelArr
        this.status = status
        this.desc = desc
        this.memberIdArr = memberIdArr
    }
    
}