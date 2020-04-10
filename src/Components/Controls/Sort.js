//rcc - react component class = stateful component
import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            selectedSort: null
        })
    }

    onChangeFilterSort = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.changeFilterSort(this.state.selectedSort)
        })
    }
    render() {
        return (
            <div className="form-group text-left">
                <label>SẮP XẾP CÔNG VIỆC</label>
                <select className="form-control"
                    name="selectedSort"
                    onChange={this.onChangeFilterSort}
                >
                    <option value={-1}>Không sort</option>
                    <option value={1}>Từ A đến Z</option>
                    <option value={2}>Từ Z đến A</option>
                </select>
            </div>
        );
    }
}

export default Sort;