import React, { Component } from 'react';
// import './table.css';

export default class Table extends Component {

    returnModulo(index) {
        return index % 2 === 0;
    }

    render() {
        return (
            <div className="table">
                <div className="table-header">
                    <div className="table-header-col"> ID </div>
                    <div className="table-header-col"> LIBELLE </div>
                    <div className="table-header-col"> DATE </div>
                    <div className="table-header-col"> ACCOUNT </div>
                    <div className="table-header-col"> TYPE </div>
                    <div className="table-header-col"> CATEGORY </div>
                    <div className="table-header-col"> SUM </div>
                    <div className="table-header-col"> OPTIONS </div>
                </div>
                {this.props.operations.map(
                    (operation, index) => (
                        this.returnModulo(index) ? (
                            <div key={operation.id} className="table-row stripped">
                                <div className="table-row-col">{operation.id}</div>
                                <div className="table-row-col">{operation.libelle}</div>
                                <div className="table-row-col">{operation.date}</div>
                                <div className="table-row-col">{operation.account}</div>
                                <div className="table-row-col">{operation.type}</div>
                                <div className="table-row-col">{operation.category}</div>
                                <div className="table-row-col">{operation.sum}</div>
                                <div className="table-row-col">2</div>
                            </div>
                        ) : (
                            <div key={operation.id} className="table-row">
                                <div className="table-row-col">{operation.id}</div>
                                <div className="table-row-col">{operation.libelle}</div>
                                <div className="table-row-col">{operation.date}</div>
                                <div className="table-row-col">{operation.account}</div>
                                <div className="table-row-col">{operation.type}</div>
                                <div className="table-row-col">{operation.category}</div>
                                <div className="table-row-col">{operation.sum}</div>
                                <div className="table-row-col">2</div>
                            </div>
                        )
                    )
                )}
            </div>
        )
    }
}