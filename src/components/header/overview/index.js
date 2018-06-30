import React, { Component } from 'react';
import {MdEdit, MdDelete} from "react-icons/lib/md/index";
// import './overview.css';

export default class Overview extends Component {
    render() {
        return (
            <div className="header-overview">
                    {this.props.categories.map(
                        (category) => (
                            category.selected &&
                                this.props.operations.map(
                                    (operation) => (
                                        operation.category === category.id &&
                                        <div key={operation.id} className="header-overview-row">
                                            <div className="header-overview-row-title">{operation.libelle}</div>
                                            <div className="header-overview-row-sum">{operation.sum} €</div>
                                            <div className="header-overview-row-options">
                                                <div className="header-overview-row-options-icon"><MdEdit/></div>
                                                <div className="header-overview-row-options-icon"><MdDelete/></div>
                                            </div>
                                        </div>
                                    )
                                )
                        )
                    )}
            </div>
        )
    }
}