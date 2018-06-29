import React, { Component } from 'react';
import './App.css';

import Header from "./components/header";
import Table from "./components/table";

import {SAMPLE_OPERATIONS} from "./fixtures/operations_fixtures";
import {SAMPLE_CATEGORIES} from "./fixtures/categories_fixtures";

class App extends Component {
    state={
        categories: SAMPLE_CATEGORIES,
        operations: SAMPLE_OPERATIONS
    };

    // componentWillMount() {
    //     this.setState({
    //         categories: SAMPLE_CATEGORIES,
    //         operations: SAMPLE_OPERATIONS
    //     })
    // }

    handleCategoryChange(id) {
        let categories = this.state.categories;
        categories.forEach((category) => {
            category.selected = category.id === id;
            this.setState({
               categories: categories
            });
        })
    }

    render() {

        return (

            <div className="App">

                <Header
                    categories={this.state.categories}
                    operations={this.state.operations}
                    handleCategoryChange={this.handleCategoryChange.bind(this)}
                />

                <Table
                    operations={this.state.operations}
                />

                <div className="btn-overview btn-overview-plus">+</div>
                <div className="btn-table btn-table-plus">+</div>
                <div className="btn-table btn-table-minus">-</div>

            </div>

        );
    }
}

export default App;
