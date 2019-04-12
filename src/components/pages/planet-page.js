import React, { Component } from 'react';
import SwapiService from '../../services/services'
import ErrorCatch from "../error-catch";
import Row from "../row";
import {PlanetDetails, PlanetList} from "../sw-components";

export default class PlanetsPage extends Component{

    swapiService = new SwapiService()

    state={
        selectedItem: 3,
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render(){
        const {selectedItem} = this.state
        const planetList = (
            <PlanetList onItemSelected = {this.onItemSelected}>
                {({name}) => (<span>{name}</span>)}
            </PlanetList>
        );

        const planetDetails = (
            <PlanetDetails itemId={selectedItem}/>
        )

        return(
            <ErrorCatch>
                <Row left = {planetList} right = {planetDetails} />
            </ErrorCatch>
        )
    }
}
