import React, { Component } from 'react';
// import './total.css';

export default class Total extends Component {
    state = {
        credit: 0,
        debit: 0,
        total: 0,
    };

    componentWillMount() {
        let credit = 0;
        let debit = 0;
        let total = 0;

        this.props.operations.forEach((operation) => {
            if (operation.type === "credit") {
                credit += parseFloat(operation.sum);
            }
            if (operation.type === "debit") {
                debit += parseFloat(operation.sum);
            }
        });

        total = credit - debit;

        this.setState({
           credit: credit.toFixed(2),
           debit: debit.toFixed(2),
           total: total.toFixed(2),
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="header-total">
                <p className="header-total-p-plus">{this.state.credit} €</p>
                <p className="header-total-p-minus">{this.state.debit} €</p>
                <p>____________</p>
                <p className="header-total-p-total">{this.state.total} €</p>
            </div>
        )
    }
}