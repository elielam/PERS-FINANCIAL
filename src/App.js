import React, { Component } from 'react';
import './App.css';

import Header from "./components/header";
import Table from "./components/table";

import {SAMPLE_OPERATIONS} from "./fixtures/operations_fixtures";
import {SAMPLE_CATEGORIES} from "./fixtures/categories_fixtures";
import ModalSettings from "./components/modalSettings";

class App extends Component {
    state={
        categories: SAMPLE_CATEGORIES,
        operations: SAMPLE_OPERATIONS,
        values: {
            credit: 0,
            debit: 0,
            total: 0,
        },
        settings: {
            show: false,
            type: "",
            entity: []
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

    handleSettingsBtn(type, id) {
        let settings = this.state.settings;
        settings.show = true;
        settings.type = type;
        switch (type) {
            case 'operation':
                this.state.operations.forEach((operation) => {
                    if (operation.id === id) {
                        settings.entity.push(operation);
                    }
                });
                break;
            case 'category':
                this.state.categories.forEach((category) => {
                    if (category.id === id) {
                        settings.entity.push(category);
                    }
                });
                break;
            default:
                break;
        }
        this.setState({
            settings: settings
        });
    }

    handleCloseSettings(){
        this.setState({
            settings: {
                show: false,
                type: "",
                entity: []
            }
        });
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
                    handleSettingsBtn={this.handleSettingsBtn.bind(this)}
                />

                <Table
                    operations={this.state.operations}
                    handleDeleteBtn={this.handleDeleteBtn.bind(this)}
                    handleSettingsBtn={this.handleSettingsBtn.bind(this)}
                />

                { this.state.settings.show && (
                    <ModalSettings
                        type={this.state.settings.type}
                        entity={this.state.settings.entity}
                        handleCloseSettings={this.handleCloseSettings.bind(this)}
                    />
                )}

            </div>

        );
    }
}

export default App;
