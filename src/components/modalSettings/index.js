import React, { Component } from 'react';
import FormSettings from "../formSettings";
// import './modal-settings.css';

export default class ModalSettings extends Component {
    render() {
        return (
            <div className="modal-settings">
                <div className="modal-settings-content">
                    <FormSettings
                        settings={this.props.settings}
                        handleSaveSettings={this.props.handleSaveSettings}
                        handleCloseSettings={this.props.handleCloseSettings}
                    />
                </div>
            </div>
        )
    }
}