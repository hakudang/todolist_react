//rcc - react component class = stateful component
import React, { Component } from 'react';

class FilterStatus extends Component {
    handleFilterStatus = (filterStatus) => {
        this.props.changeFilterStatus(filterStatus)
    }
    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">
                    LỌC THEO TRẠNG THÁI
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterStatus.bind(this, -1)} // truyền vào 1 tham số nên dùng bind
                    >
                        {/* <i className="uil uil-anchor mr-2" /> */}
                        Tất cả
                    </li>
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterStatus.bind(this, 1)}
                    >
                        <i className="uil uil-anchor mr-2" />
                        Chưa bắt đầu
                    </li>
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterStatus.bind(this, 2)}
                    >
                        <i className="uil uil-process mr-2" />
                        Đang tiến hành
                    </li>
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterStatus.bind(this, 3)}
                    >
                        <i className="uil uil-check-square mr-2" />
                        Hoàn thành
                    </li>
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterStatus.bind(this, 4)}
                    >
                        <i className="uil uil-cancel mr-2" />
                        Hủy bỏ
                    </li>
                </ul>
            </div>
        );
    }
}

export default FilterStatus;