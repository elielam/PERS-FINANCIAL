import React, { Component } from 'react';
import './App.css';

import Header from "./components/header";
import Table from "./components/table";

import {SAMPLE_OPERATIONS} from "./fixtures/operations_fixtures";
import {SAMPLE_CATEGORIES} from "./fixtures/categories_fixtures";

class App extends Component {
    state={
        categories: SAMPLE_CATEGORIES,
        operations: SAMPLE_OPERATIONS,
        values: {
            credit: 0,
            debit: 0,
            total: 0,
        }
    };

    componentWillMount() {
        this.updateValues();
    }

    handleCategoryChange(id) {
        let categories = this.state.categories;
        categories.forEach((category) => {
            category.selected = category.id === id;
            this.setState({
               categories: categories
            });
        })
    }

    handleDeleteBtn(id) {
        let operations = this.state.operations;
        operations.forEach((operation, index) => {
            if(operation.id === id) {
                operations.splice(index, 1);
            }
        });
        this.setState({
            operations: operations
        });
        this.updateValues();
    }

    handleSettingsBtn(id) {
        let operations = this.state.operations;
        operations.forEach((operation, index) => {
            if(operation.id === id) {
                operations.splice(index, 1);
            }
        });
        this.setState({
            operations: operations
        });
        this.updateValues();
    }

    updateValues() {
        let credit = 0;
        let debit = 0;
        let total = 0;

        this.state.operations.forEach((operation) => {
            if (operation.type === "credit") {
                credit += parseFloat(operation.sum);
            }
            if (operation.type === "debit") {
                debit += parseFloat(operation.sum);
            }
        });

        total = credit - debit;

        this.setState({
            values: {
                credit: credit.toFixed(2),
                debit: debit.toFixed(2),
                total: total.toFixed(2),
            }
        });
    }

    render() {

        return (

            <div className="App">

                <Header
                    categories={this.state.categories}
                    operations={this.state.operations}
                    values={this.state.values}
                    handleCategoryChange={this.handleCategoryChange.bind(this)}
                />

                <Table
                    operations={this.state.operations}
                    handleDeleteBtn={this.handleDeleteBtn.bind(this)}
                />

            </div>

        );
    }
}

export default App;
