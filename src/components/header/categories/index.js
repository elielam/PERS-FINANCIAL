import React, { Component } from 'react';
// import './categories.css';

export default class Categories extends Component {
    render() {
        return (
            <div className="header-categories">
                {this.props.categories.map(
                    (category) => (
                        <div key={category.id} className="header-categories-row" onClick={() => this.props.handleCategoryChange(category.id)}>
                            <div className="header-categories-row-title">
                                <p>{category.libelle}</p>
                            </div>
                            <div className="header-categories-row-options">
                                <div className="header-categories-row-options-icon">1</div>
                                <div className="header-categories-row-options-icon">2</div>
                            </div>
                        </div>
                    )
                )}
            </div>
        )
    }
}