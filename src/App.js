import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from "./components/header";
import Table from "./components/table";

import ModalSettings from "./components/modalSettings";
import ModalAdd from "./components/modalAdd";

class App extends Component {
    state={
        categories: [],
        operations: [],
        values: {
            credit: 0,
            debit: 0,
            total: 0,
        },
        settings: {
            show: false,
            type: "",
            entity: []
        },
        add: {
            show: false
        }
    };

    componentWillMount() {
        this.getCategories();
        this.getOperations();
    }

    getCategories() {
        axios.get("http://localhost:8000/categories/")
            .then((response) => {
                this.setState({
                    categories: response.data.datas
                })
            }).catch(function(error) {
            console.log(error);
        });
    }

    getOperations() {
        axios.get("http://localhost:8000/operations/")
            .then((response) => {
                this.setState({
                    operations: response.data.datas
                });
                this.updateValues();
            }).catch(function(error) {
            console.log(error);
        });
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
        operations.forEach((operation) => {
            if(operation.id === id) {
                axios.delete("http://localhost:8000/operation/", {params: {id: id}})
                .then(() => {
                    this.getOperations();
                }).catch(function(error) {
                    console.log(error);
                });
            }
        });
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

    handleSettingsDeleteBtn(id) {
        let categories = this.state.categories;
        categories.forEach((category) => {
            if(category.id === id) {
                axios.delete("http://localhost:8000/category/", {params: {id: id}})
                    .then(() => {
                        this.getCategories();
                    }).catch(function(error) {
                    console.log(error);
                });
            }
        });
        this.handleCloseSettings();
    }

    handleSaveSettings(type, entity) {
        switch (type) {
            case "category":
                let categories = this.state.categories;
                categories.forEach((category) => {
                    if(category.id === entity.id) {
                        axios.put("http://localhost:8000/category/", `id=${entity.id}&libelle=${entity.libelle}`)
                            .then(() => {
                                this.getCategories();
                            }).catch(function(error) {
                            console.log(error);
                        });
                    }
                });
                break;
            case "operation":
                let operations = this.state.operations;
                operations.forEach((operation) => {
                    if(operation.id === entity.id) {
                        axios.put("http://localhost:8000/operation/", `id=${entity.id}&libelle=${entity.libelle}&type=${entity.type}&date=${entity.date}&category=${entity.category}&sum=${entity.sum}`)
                            .then(() => {
                                this.getOperations();
                            }).catch(function(error) {
                            console.log(error);
                        });
                    }
                });
                break;
            default:
                break;
        }
        this.handleCloseSettings();
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

    handleAddBtn() {
        let add = this.state.add;
        add.show = true;
        this.setState({
            add: add
        });
    }

    handleSaveAdd(type, entity) {
        switch (type) {
            case "category":
                axios.post("http://localhost:8000/category/", `libelle=${entity.libelle}`)
                .then(() => {
                    this.getCategories();
                }).catch(function(error) {
                    console.log(error);
                });
                break;
            case "operation":
                axios.post("http://localhost:8000/operation/", `libelle=${entity.libelle}&type=${entity.type}&date=${entity.date}&category=${entity.category}&sum=${entity.sum}`)
                    .then(() => {
                        this.getOperations();
                    }).catch(function(error) {
                    console.log(error);
                });
                break;
            default:
                break;
        }
        this.handleCloseAdd();
    }

    handleCloseAdd() {
        let add = this.state.add;
        add.show = false;
        this.setState({
            add: add
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
                    categories={this.state.categories}
                    operations={this.state.operations}
                    handleDeleteBtn={this.handleDeleteBtn.bind(this)}
                    handleSettingsBtn={this.handleSettingsBtn.bind(this)}
                    handleAddBtn={this.handleAddBtn.bind(this)}
                />

                { this.state.settings.show && (
                    <ModalSettings
                        settings={this.state.settings}
                        handleSaveSettings={this.handleSaveSettings.bind(this)}
                        handleCloseSettings={this.handleCloseSettings.bind(this)}
                        handleSettingsDeleteBtn={this.handleSettingsDeleteBtn.bind(this)}
                    />
                )}

                { this.state.add.show && (
                    <ModalAdd
                        entities={this.state}
                        handleSaveAdd={this.handleSaveAdd.bind(this)}
                        handleCloseAdd={this.handleCloseAdd.bind(this)}
                    />
                )}

            </div>

        );
    }
}

export default App;
