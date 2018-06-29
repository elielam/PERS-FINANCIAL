import React, { Component } from 'react';
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
                                                <div className="header-overview-row-options-icon">1</div>
                                                <div className="header-overview-row-options-icon">2</div>
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