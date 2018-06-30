import React, { Component } from 'react';
import Total from "./total";
import Categories from "./categories";
import Overview from "./overview";
// import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">

                <Total
                    operations={this.props.operations}
                />

                <Categories
                    operations={this.props.operations}
                    categories={this.props.categories}
                    handleCategoryChange={this.props.handleCategoryChange}
                />

                <Overview
                    categories={this.props.categories}
                    operations={this.props.operations}
                />

            </div>
        )
    }
}