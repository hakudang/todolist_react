import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            selectedStatus: null
        })
    }


    // onChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    //     this.props.changeStatus(this.props.item.id, this.state.selectedStatus)
    // }

    // xư lý bất đồng bộ giữ setState và 
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.changeStatus(this.props.item.id, this.state.selectedStatus)
        })
    }

    getLabelColor = (label) => {
        let labelColor
        switch (label) {
            case "label_1":
                return labelColor = "#F7BA43"
            case "label_2":
                return labelColor = "#FAFF01"
            case "label_3":
                return labelColor = "#32D843"
            case "label_4":
                return labelColor = "#08B1F9"
            case "label_5":
                return labelColor = "#0A3FFA"
            case "label_6":
                return labelColor = "#BA0DF6"
            default:
                labelColor = "black"
                break;
        }
        return labelColor
    }

    editHandle = () => {
        this.props.onEditTask(this.props.item)  // return item ve Father
    }

    render() {
        // let item = this.props.item
        // let index = this.props.index
        let { item, index } = this.props

        //label
        let elementLabels = item.labelArr.map((label, index) => {
            return <i
                key={index}
                className="fa fa-circle mr-1"
                style={{ color: this.getLabelColor(label) }}
            />
        })

        //priority
        let elementPriority, classPriority
        switch (item.priority) {
            case 1:
                elementPriority = "Cao"
                classPriority = "text-danger"
                break;
            case 2:
                elementPriority = "TB"
                classPriority = "text-success"
                break;
            case 3:
                elementPriority = "Thấp"
                classPriority = "text-primary"
                break;
            default:
                break;
        }

        //members
        let elementMembers = item.memberIdArr.map((member, index) => {
            return <img
                key={index}
                src={`./img/${member}.png`}
                className="my-user mr-1" alt="my-user"
            />
        })
        //status

        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-left">{item.name}</td>

                {/* render labels  */}
                <td className="text-center">
                    {elementLabels}
                    {/* <i className="fa fa-circle" style={{ color: "#389E0D" }} />
                    <i className="fa fa-circle" style={{ color: "#13C2C2" }} /> */}
                </td>

                {/* render priority  */}
                <td className={`${classPriority} font-weight text-center`}>
                    {elementPriority}
                </td>

                {/* render member  */}
                <td className="text-center">
                    {elementMembers}
                    {/* <img src="./img/user_2.png" className="user" alt="user" />
                    <img src="./img/user_3.png" className="user" alt="user" /> */}

                </td>

                {/* render button  */}
                <td className="text-center">
                    <div>
                        {/* Sửa botton*/}
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={this.editHandle}

                            // show Modal Popup
                            data-toggle="modal"
                            data-target="#modalTask"
                        >
                            <i class="uil uil-edit"/>
                        </button>
                    </div>

                </td>

                {/* render status  */}
                <td className="text-center">
                    <div className="form-group d-inline ml-2">
                        <select
                            className="form-group d-inline"
                            style={{ width: "90%", fontFamily: ["Ubuntu", "unicons"] }}
                            name="selectedStatus"
                            onChange={this.onChange}
                            value={item.status}
                        >
                            <option value={'1'}>&#xe825; &nbsp;Chưa bắt đầu</option>
                            <option value={'2'}>&#xeb42; &nbsp;Đang tiến hành</option>
                            <option value={'3'}>&#xe8db; &nbsp;Hoàn thành</option>
                            <option value={'4'}>&#xe8c1; &nbsp;Huỷ bỏ</option>
                        </select>
                    </div>
                </td>
                {/* <td className="text-center">
                    <i className="fa fa-check-square-o mr-2" />
                </td> */}
            </tr>
        );
    }
}

export default Item;