import React, { Component } from 'react';
import './item-details.sass'
import SwapiService from '../../services/services'
import Spinner from '../spinner'

const Record = ({ item = {}, field, label }) => {
    return (
        <li>
            {label} : {item[field]}
        </li>
    )
}

export {Record}

export default class ItemDetails extends Component{

    SwapiService = new SwapiService()

    state = {
        item: {},
        loading: true,
        image: null,
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId){
            this.setState({
                loading: true
            })
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if(!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item)
                });
            });
    }

    render(){
        const {item, loading, image} = this.state
        const { children } = this.props
        const itemInfo = !loading? <ItemInfo
                                        item = {item}
                                        image = {image}
                                        children = {children}/> : null
        const spinner = loading? <Spinner/> : null
        return(
            <div className = "item-details">
                {spinner}
                {itemInfo}
            </div>
        )
    }
}

const ItemInfo = ( {item, image, children} ) => {
    const { name } = item
    return(
        <React.Fragment>
            <div className="item-details-img">
                <img src={image} alt=""/>
            </div>
            <div className="item-details-info">
                <div className="name">{name}</div>
                <div className="desc">
                    <ul>
                        {
                            React.Children.map(children, (child, idx) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}