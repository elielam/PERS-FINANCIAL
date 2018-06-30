import React, { Component } from 'react';
import {MdClose} from "react-icons/lib/md/index";
// import './modal-settings.css';

export default class ModalSettings extends Component {
    render() {
        return (
            <div className="modal-settings">
                <div className="modal-settings-close-btn" onClick={this.props.handleCloseSettings}>
                    <MdClose
                        color={"white"}
                    />
                </div>
            </div>
        )
    }
}