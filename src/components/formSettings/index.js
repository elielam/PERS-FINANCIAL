import React, { Component } from 'react';
// import './form-settings.css';

export default class FormSettings extends Component {
    state = {
        entity: this.props.settings.entity[0]
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.settings.entity !== this.state.entity) {
            this.setState({ entity: this.props.settings.entity[0] });
        }
    }

    handleChange(e) {
        let entity = this.state.entity;
        entity[e.target.name] = e.target.value;
        this.setState({
            entity: entity
        });
    }

    generateCategoryInputs() {
        let inputs = [];
        this.props.categories.forEach((category) => {
            inputs.push(<option key={category.id} value={category.id}>{category.libelle}</option>)
        });
        return inputs;
    }

    render() {
        return (
            <div className="form">
                <div className="form-title">
                    <h4>{this.props.settings.type}</h4>
                    <small>{this.props.settings.entity[0].libelle}</small>
                </div>
                <div className="form-inputs">
                    {this.props.settings.type === "category" && (
                        <input type="text" name="libelle" value={this.state.entity.libelle} onChange={(e) => this.handleChange(e)}/>
                    )}
                    {this.props.settings.type === "operation" && (
                        <div>
                            <input type="text" name="libelle" value={this.state.entity.libelle} onChange={(e) => this.handleChange(e)}/>
                            <input type="text" name="date" value={this.state.entity.date} onChange={(e) => this.handleChange(e)}/>
                            <select id="type" name="type" value={this.state.entity.type} onChange={(e) => this.handleChange(e)}>
                                <option value="debit">Debit</option>
                                <option value="credit">Credit</option>
                            </select>
                            <select id="category" name="category" value={this.state.entity.category} onChange={(e) => this.handleChange(e)}>
                                {this.generateCategoryInputs()}
                            </select>
                            <input type="text" name="sum" value={this.state.entity.sum} onChange={(e) => this.handleChange(e)}/>
                        </div>
                    )}
                </div>
                <div className="form-btns">
                    <button onClick={() => this.props.handleSaveSettings(this.props.settings.type ,this.state.entity)}>Apply</button>
                    {this.props.settings.type === "category" && (
                        <button onClick={() => this.props.handleSettingsDeleteBtn(this.state.entity.id)}>Delete</button>
                    )}
                    <button onClick={this.props.handleCloseSettings}>Cancel</button>
                </div>
            </div>
        )
    }
}