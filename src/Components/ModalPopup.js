import React, { Component } from 'react'
import CheckboxGroup from 'react-checkbox-group'

class ModalPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            priority:3,
            desc: '',
            memberIdArr: [],
            labelArr: []
        }
    }
    // khi thay đổi textfield -> thay đổi state
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    // Khi click submit button -> không load lại page
    onSubmit = (event) => {
        event.preventDefault()
        // truyền vào các giá trị của state để đem ra bên ngoài cho App ( Cha ), add new task
        // Usage : khi click "Them Task" && state.isAddNewTask = true
        this.props.addNewTask(this.state)
        // Usage : khi click "Sua Task" && && state.isAddNewTask = false
        this.props.editTask(this.state)
    }

    // Sử dụng cho event onChange memberIdArr textField
    setMemberIdArr = (newMembers) => {
        this.setState({
            memberIdArr: newMembers
        })
    }

    // Sử dụng cho event onChange newLabels textField
    setLabelArr = (newLabels) => {
        this.setState({
            labelArr: newLabels
        })
    }

    //Return nextProps = props được render mới nhất của ModalPopup
    componentWillReceiveProps = (nextProps) => {
        
        if (nextProps && this.props.isAddNewTask) {
            this.clearAddTaskForm()
        }

        if (nextProps && nextProps.taskEditing && !nextProps.isAddNewTask) {
            // console.log(nextProps);   // kiem tra props hien co = {isAddNewTask: false, taskEditing: {…}, addNewTask: ƒ}
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                priority: nextProps.taskEditing.priority,
                desc: nextProps.taskEditing.desc,
                memberIdArr: nextProps.taskEditing.memberIdArr,
                labelArr: nextProps.taskEditing.labelArr
            })
        }
    }

    clearAddTaskForm = () => {
        this.setState({
            id: '',
            name: '',
            priority: 3,
            desc: '',
            memberIdArr: [],
            labelArr: []
        })
    }

    render() {
        const style1 = { marginRight: "20px" }
        return (
            <div>
                <div className="modal fade" id="modalTask">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header my-modal-header">
                                <h5 className="modal-title">{this.props.isAddNewTask ? "TẠO CÔNG VIỆC" : "CHỈNH SỬA CÔNG VIỆC"}</h5>
                                <button type="button" className="close" data-dismiss="modal">
                                    ×
                                </button>
                            </div>
                            {/* Modal body */}
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="taskName">Tên công việc:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            // id="taskName" 
                                            name="name" // "name" của state
                                            onChange={this.onChange}
                                            value={this.state.name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Mô tả:</label>
                                        <textarea
                                            className="form-control"
                                            rows={2}
                                            id="description"
                                            // defaultValue={""}
                                            name="desc" // 
                                            onChange={this.onChange}
                                            value={this.state.desc}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="priority">Độ ưu tiên:</label>
                                        <select
                                            className="form-control"
                                            // id="priority"
                                            name="priority"
                                            onChange={this.onChange}
                                            value={this.state.priority}
                                        >
                                            <option value={3}>Thấp</option>
                                            <option value={2}>Trung bình</option>
                                            <option value={1}>Cao</option>
                                        </select>
                                    </div>
                                    <label htmlFor="label">Người thực hiện:</label>
                                    {/* <br /> */}
                                    <CheckboxGroup
                                        name="memberIdArr"
                                        value={this.state.memberIdArr}
                                        onChange={this.setMemberIdArr}>
                                        {(Checkbox) => (
                                            <>
                                                <div>
                                                    <label style={style1}>
                                                        <Checkbox value="user_1" /> Nguyễn Văn Minh
                                                    </label>
                                                    <label style={style1}>
                                                        <Checkbox value="user_2" /> Trần Văn Tài
                                                    </label>
                                                    <label style={style1}>
                                                        <Checkbox value="user_3" /> Pham Văn Mách
                                                    </label>
                                                    <label style={style1}>
                                                        <Checkbox value="user_4" /> Mã Kim Sơn
                                                    </label>
                                                </div>
                                                <div>
                                                    <label style={style1}>
                                                        <Checkbox value="user_5" /> Nguyễn Văn Trinh
                                                    </label>
                                                    <label style={style1}>
                                                        <Checkbox value="user_6" /> Trần Văn Tiến
                                                    </label>
                                                    <label style={style1}>
                                                        <Checkbox value="user_7" /> Pham Văn Hai
                                                    </label>
                                                    <label style={style1}>
                                                        <Checkbox value="user_8" /> Mã Kim Lợi
                                                    </label>
                                                </div>
                                            </>

                                        )}
                                    </CheckboxGroup>
                                    {/* <br /> */}
                                    <label htmlFor="label">Nhãn:</label>
                                    {/* <br /> */}
                                    <CheckboxGroup
                                        name="labelArr"
                                        value={this.state.labelArr}
                                        onChange={this.setLabelArr}>
                                        {(Checkbox) => (
                                            <>
                                                <div>
                                                    <label style={style1}>
                                                        <Checkbox value="label_1" /> Requirement
                                                    </label>
                                                    <label style={style1}>
                                                        <Checkbox value="label_2" /> Database Design
                                                    </label>
                                                    <label style={style1}>
                                                        <Checkbox value="label_3" /> Backend Coding
                                                    </label>
                                                    <label style={style1}>
                                                        <Checkbox value="label_4" /> Frontend UIUX
                                                    </label>
                                                </div>
                                                <div>
                                                    <label style={style1}>
                                                        <Checkbox value="label_5" /> Frontend Coding
                                                    </label>
                                                    <label style={style1}>
                                                        <Checkbox value="label_6" /> Deploy
                                                    </label>

                                                </div>
                                            </>

                                        )}
                                    </CheckboxGroup>
                                </div>

                                {/* Modal footer */}
                                <div className="modal-footer">
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    // data-dismiss="modal"
                                    >
                                        {this.props.isAddNewTask ? "Thêm Task" : "Sửa Task"}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-dismiss="modal">
                                        Đóng
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ModalPopup
