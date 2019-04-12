import React, { Component } from 'react';
import './item-list.sass'
import SwapiService from '../../services/services'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import { withData } from '../hoc-helper'

class ItemList extends Component{

    renderItems = (items) => {
        return items.map((item) => {
            const { id } = item;
            const label = this.props.children(item);
            return(
                <li key={id}
                    onClick = {() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render(){
        const { data } = this.props;
        if(!data) {
            return <Spinner />
        }
        const items = this.renderItems(data)
        return(
            <div className = "item-list">
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

export default ItemList