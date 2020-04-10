// rcc - react component class = stateful component
import React, { Component } from 'react';

class FilterLabel extends Component {
    handleFilterLabel = (filterStatus) => {
        this.props.changeFilterLabel(filterStatus)
    }
    render() {
        return (
            <div className="filter filter--label">
                <ul className="list-unstyled text-left">
                    LỌC THEO NHÃN
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterLabel.bind(this, -1)}
                    >
                        {/* <i className="fa fa-circle mr-2" /> */}
                        Tất cả
                    </li>
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterLabel.bind(this, 1)}

                    >
                        <i className="fa fa-circle mr-2" />
                        Requirement
                    </li>
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterLabel.bind(this, 2)}
                    >
                        <i className="fa fa-circle mr-2" />
                        Database Design
                    </li>
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterLabel.bind(this, 3)}
                    >
                        <i className="fa fa-circle mr-2" />
                        Backend Coding
                    </li>
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterLabel.bind(this, 4)}
                    >
                        <i className="fa fa-circle mr-2" />
                        Frontend UIUX
                    </li>
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterLabel.bind(this, 5)}
                    >
                        <i className="fa fa-circle mr-2" />
                        Frontend Coding
                    </li>
                    <li className="py-1 display-5 lead"
                        onClick={this.handleFilterLabel.bind(this, 6)}
                    >
                        <i className="fa fa-circle mr-2" />
                        Deploy
                    </li>
                </ul>
            </div>
        );
    }
}

export default FilterLabel;