import React, { Component } from 'react';
// import './form-add.css';
import {countAllCategories, countAllOperations} from "../../model/helpers";

export default class FormAdd extends Component {
    state = {
        entity: {}
    };

    componentWillMount() {
        if(this.props.type === "operation") {
            let entity = this.state.entity;
            entity.id = countAllOperations(this.props.entities.operations) + 1;
            this.setState({
                entity: entity
            });
        }
        if(this.props.type === "category") {
            let entity = this.state.entity;
            entity.id = countAllCategories(this.props.entities.categories) + 1;
            entity.selected = false;
            this.setState({
                entity: entity
            });
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

    render() {
        return (
            <div className="form">
                <div className="form-title">
                    <h4>{this.props.type}</h4>
                    {/*<small>{this.props.settings.entity[0].libelle}</small>*/}
                </div>
                <div className="form-inputs">
                    {this.props.type === "category" && (
                        <input type="text" name="libelle" value={this.state.entity.libelle} onChange={(e) => this.handleChange(e)}/>
                    )}
                    {this.props.type === "operation" && (
                        <div>
                            <input type="text" name="libelle" value={this.state.entity.libelle} onChange={(e) => this.handleChange(e)}/>
                            <input type="text" name="date" value={this.state.entity.date} onChange={(e) => this.handleChange(e)}/>
                            <input type="text" name="type" value={this.state.entity.type} onChange={(e) => this.handleChange(e)}/>
                            <input type="text" name="category" value={this.state.entity.category} onChange={(e) => this.handleChange(e)}/>
                            <input type="text" name="sum" value={this.state.entity.sum} onChange={(e) => this.handleChange(e)}/>
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