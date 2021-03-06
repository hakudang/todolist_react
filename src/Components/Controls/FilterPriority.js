// rcc - react component class = stateful component

import React, { Component } from 'react';

class FilterPriority extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            selectedPriority: null
        })
    }

    // // callback function
    // handleFilterPriority = (filterPriority) => {
    //     this.props.changeFilterPriority(filterPriority)
    // }

    // callback function - xư lý bất đồng bộ setState
    onChangeFilterPriority = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.changeFilterPriority(this.state.selectedPriority)
        })  
    }

    render() {
        return (
            <div className="form-group text-left">
                <label htmlFor="sel1">LỌC THEO ĐỘ ƯU TIÊN</label>
                <select className="form-control"
                    name="selectedPriority"
                    onChange={this.onChangeFilterPriority}
                >
                    <option className="font-weight" value={-1}>
                        Tất cả
                    </option>
                    <option className="text-info font-weight" value={3}>
                        Thấp
                    </option>
                    <option className="text-success font-weight" value={2}>
                        Trung bình
                    </option>
                    <option className="text-danger font-weight" value={1}>
                        Cao
                    </option>
                </select>
            </div>
        );
    }
}

export default FilterPriority;