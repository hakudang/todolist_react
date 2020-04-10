import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            filterSearch: ''
        })
    }

    handleChangeFilterSearch = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.changeFilterSearch(this.state.filterSearch)
        })
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="form-group text-left my-0">                    
                    <input
                        // type="text"
                        type="search"
                        className="form-control my-search"
                        placeholder="Tìm kiếm công việc"
                        onChange={this.handleChangeFilterSearch}
                        name="filterSearch"
                    />
                </div>
            </div>
        );
    }
}

export default Search;