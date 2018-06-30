import React, { Component } from 'react';
// import './total.css';

export default class Total extends Component {
    render() {
        return (
            <div className="header-total">
                <p className="header-total-p-plus">{this.props.values.credit} €</p>
                <p className="header-total-p-minus">{this.props.values.debit} €</p>
                <p>____________</p>
                <p className="header-total-p-total">{this.props.values.total} €</p>
            </div>
        )
    }
}