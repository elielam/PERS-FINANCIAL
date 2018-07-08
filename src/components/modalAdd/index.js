import React, { Component } from 'react';
import FormAdd from "../formAdd";
// import './modal-add.css';

export default class ModalAdd extends Component {
    state = {
        type: ""
    };

    componentWillMount() {
        this.setState({
            type: ""
        });
    }

    handleChange(e) {
        let state = this.state;
        state.type = e.target.value;
        this.setState({
            state
        });
    }

    render() {
        return (
            <div className="modal-add">
                {this.state.type === "" ? (
                    <div className="modal-add-select">
                        <select style={{width: "100%", height: "100%"}} name="type" onChange={(e) => this.handleChange(e)} defaultValue={this.state.type}>
                            <option key={0} value={""}/>
                            <option key={1} value={"operation"}>OPERATION</option>
                            <option key={2} value={"category"}>CATEGORY</option>
                        </select>
                    </div>
                ) : (
                    <div className="modal-add-content">
                        <FormAdd
                            entities={this.props.entities}
                            type={this.state.type}
                            handleSaveAdd={this.props.handleSaveAdd}
                            handleCloseAdd={this.props.handleCloseAdd}
                        />
                    </div>
                )}
            </div>
        )
    }
}