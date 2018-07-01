import React, { Component } from 'react';
import {MdSettings} from "react-icons/lib/md/index";
// import './categories.css';

export default class Categories extends Component {
    generateCategoryCount(id) {
        let count = 0;
        this.props.operations.forEach((operation) => {
            if(operation.category === parseInt(id, 10)) {
                count++;
            }
        });
        return count;
    }

    render() {
        return (
            <div className="header-categories">
                {this.props.categories.map(
                    (category) => (
                        <div key={category.id} className="header-categories-row">
                            <div className="header-categories-row-title" onClick={() => this.props.handleCategoryChange(category.id)}>
                                <p>{category.libelle}</p>
                            </div>
                            <div className="header-categories-row-count" onClick={() => this.props.handleCategoryChange(category.id)}>
                                {this.generateCategoryCount(category.id)}
                            </div>
                            <div className="header-categories-row-options">
                                <div className="header-categories-row-options-icon"><MdSettings onClick={() => this.props.handleSettingsBtn('category', category.id)}/></div>
                            </div>
                        </div>
                    )
                )}
            </div>
        )
    }
}