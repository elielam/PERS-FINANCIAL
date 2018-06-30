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
                    values={this.props.values}
                />

                <Categories
                    operations={this.props.operations}
                    categories={this.props.categories}
                    handleCategoryChange={this.props.handleCategoryChange}
                    handleSettingsBtn={this.props.handleSettingsBtn}
                />

                <Overview
                    categories={this.props.categories}
                    operations={this.props.operations}
                />

            </div>
        )
    }
}