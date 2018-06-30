import React, { Component } from 'react';
import {MdEdit, MdDelete} from "react-icons/lib/md/index";
// import './categories.css';

export default class Categories extends Component {
    generateCategoryCount(id) {
        let count = 0;
        this.props.operations.forEach((operation) => {
            if(operation.category === id) {
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
                        <div key={category.id} className="header-categories-row" onClick={() => this.props.handleCategoryChange(category.id)}>
                            <div className="header-categories-row-title">
                                <p>{category.libelle}</p>
                            </div>
                            <div className="header-categories-row-count">
                                {this.generateCategoryCount(category.id)}
                            </div>
                            <div className="header-categories-row-options">
                                <div className="header-categories-row-options-icon"><MdEdit/></div>
                                <div className="header-categories-row-options-icon"><MdDelete/></div>
                            </div>
                        </div>
                    )
                )}
            </div>
        )
    }
}