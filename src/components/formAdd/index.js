import React, { Component } from 'react';
// import './form-add.css';

export default class FormAdd extends Component {
    state = {
        entity: {}
    };

    componentWillMount() {
        if(this.props.type === "operation"){
            if(this.state.entity.type === null || this.state.entity.type === undefined){
                this.setState({
                    entity: {
                        type: "debit"
                    }
                });
            }
        }
    }

    handleChange(e) {
        let entity = this.state.entity;
        if(e.target.name === "category") {
            entity[e.target.name] = parseInt(e.target.value, 10);
        } else {
            entity[e.target.name] = e.target.value;
        }
        this.setState({
            entity: entity
        });
    }

    generateCategoryInputs() {
        let inputs = [];
        this.props.entities.categories.forEach((category) => {
            inputs.push(<option key={category.id} value={category.id}>{category.libelle}</option>)
        });
        return inputs;
    }

    render() {
        return (
            <div className="form">
                <div className="form-title">
                    <h4>{this.props.type}</h4>
                    {/*<small>{this.props.settings.entity[0].libelle}</small>*/}
                </div>
                <div className="form-inputs">
                    {this.props.type === "category" && (
                        <input placeholder="Libelle" type="text" name="libelle" value={this.state.entity.libelle} onChange={(e) => this.handleChange(e)}/>
                    )}
                    {this.props.type === "operation" && (
                        <div>
                            <input placeholder="Libelle" type="text" name="libelle" value={this.state.entity.libelle} onChange={(e) => this.handleChange(e)}/>
                            <input placeholder="Date" type="text" name="date" value={this.state.entity.date} onChange={(e) => this.handleChange(e)}/>
                            <select id="type" name="type" value={this.state.entity.type} onChange={(e) => this.handleChange(e)}>
                                <option value="debit">Debit</option>
                                <option value="credit">Credit</option>
                            </select>
                            <select id="category" name="category" value={this.state.entity.category} onChange={(e) => this.handleChange(e)}>
                                {this.generateCategoryInputs()}
                            </select>
                            <input placeholder="Sum" type="text" name="sum" value={this.state.entity.sum} onChange={(e) => this.handleChange(e)}/>
                        </div>
                    )}
                </div>
                <div className="form-btns">
                    <button onClick={() => this.props.handleSaveAdd(this.props.type ,this.state.entity)}>Apply</button>
                    <button onClick={this.props.handleCloseAdd}>Cancel</button>
                </div>
            </div>
        )
    }
}