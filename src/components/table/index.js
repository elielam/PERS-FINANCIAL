import React, { Component } from 'react';
import {MdAdd, MdDelete, MdSettings} from "react-icons/lib/md/index";
import {getCategoryName} from "../../model/helpers";
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
                    <div className="table-header-col"> CATEGORY </div>
                    <div className="table-header-col"> SUM </div>
                    <div className="table-header-col"/>
                </div>
                <div className="table-corp">
                    {this.props.operations.map(
                        (operation, index) => (
                            this.returnModulo(index) ? (
                                <div key={operation.id} className="table-corp-row stripped">
                                    <div className="table-corp-row-col">{operation.id}</div>
                                    <div className="table-corp-row-col">{operation.libelle}</div>
                                    <div className="table-corp-row-col">{operation.date}</div>
                                    <div className="table-corp-row-col">{getCategoryName(this.props.categories, operation.category)}</div>
                                    {operation.type === "debit" ? (
                                        <div className="table-corp-row-col debit">{operation.sum}</div>
                                    ) : (
                                        <div className="table-corp-row-col credit">{operation.sum}</div>
                                    )}
                                    <div className="table-corp-row-col">
                                        <div className="table-corp-row-col-options"><MdDelete onClick={() => this.props.handleDeleteBtn(operation.id)}/></div>
                                        <div className="table-corp-row-col-options"><MdSettings onClick={() => this.props.handleSettingsBtn('operation', operation.id)}/></div>
                                    </div>
                                </div>
                            ) : (
                                <div key={operation.id} className="table-corp-row">
                                    <div className="table-corp-row-col">{operation.id}</div>
                                    <div className="table-corp-row-col">{operation.libelle}</div>
                                    <div className="table-corp-row-col">{operation.date}</div>
                                    <div className="table-corp-row-col">{getCategoryName(this.props.categories, operation.category)}</div>
                                    {operation.type === "debit" ? (
                                        <div className="table-corp-row-col debit">{operation.sum}</div>
                                    ) : (
                                        <div className="table-corp-row-col credit">{operation.sum}</div>
                                    )}
                                    <div className="table-corp-row-col">
                                        <div className="table-corp-row-col-options"><MdDelete onClick={() => this.props.handleDeleteBtn(operation.id)}/></div>
                                        <div className="table-corp-row-col-options"><MdSettings onClick={() => this.props.handleSettingsBtn('operation', operation.id)}/></div>
                                    </div>
                                </div>
                            )
                        )
                    )}
                </div>
                <div className="btn-table" onClick={this.props.handleAddBtn}>
                    <MdAdd
                        color={"grey"}
                        style={{
                            width: "100%",
                            height: "100%",
                            margin: 0,
                            padding: 0,
                        }}
                    />
                </div>
            </div>
        )
    }
}