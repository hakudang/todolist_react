// Chu y
// 1.Priority  -> 1: Cao, 2: Trung bình (TB), 3 : Thấp
// 2.Status -> 1: Chưa bắt đầu, 2: Đang tiến hành, 3: Hoàn thành, 4: Huỷ bỏ
// 3.Member -> 
// user_1 : Nguyễn Văn Minh, user_2: Trần Văn Tài, user_3: Phạm Văn Mách, user_4: Mã Kim Sơn
// user_5: Nguyễn Văn Trình, user_6: Trần Văn Tiến, user_7: Phạm Văn Hai, user_8: Mã Kim Lợi
// 4.Label -> 
// label_1: Requirement, label_2: Database Design, label_3:Backend Coding, label_4:Frontend UIUX, 
// label_5: Frontend Coding, label_6: Deploy

const randomID = require('randomid')


const TasksData = [
    {
        id: randomID(5),
        name: "Persona",
        priority: 1,
        labelArr: ["label_1", "label_2"],
        status: 2,
        desc: "Phong van nguoi dung, phan tich va lay du lieu",
        memberIdArr:["user_1", "user_2"]
    },
    {
        id: randomID(5),
        name: "Hieu chinh DB",
        priority: 2,
        labelArr: ["label_2"],
        status: 2,
        desc: "Thiet ke database, cap nhat thiet ke database",
        memberIdArr:["user_2"]
    },
    {
        id: randomID(5),
        name: "Main tasklist",
        priority: 2,
        labelArr: ["label_3"],
        status: 1,
        desc: "Thiet ke database, coding Api",
        memberIdArr:["user_3"]
    },
    {
        id: randomID(5),
        name: "MainPage tasklist",
        priority: 3,
        labelArr: ["label_5"],
        status: 1,
        desc: "Viết Html, Css trang Todolist - MainPage tasklist",
        memberIdArr:["user_4"]
    }

]

export default TasksData