import React, { Component } from 'react';
import SwapiService from '../../services/services'
import ErrorCatch from "../error-catch";
import Row from "../row";
import {StarshipList, StarshipDetails} from "../sw-components";
import { withRouter } from 'react-router-dom'


export default class StarshipsPage extends Component{

    swapiService = new SwapiService()

    render(){
        const { history, match } = this.props
        const { id=5 } = match.params;
        const planetList = (
            <StarshipList onItemSelected = {(id) => {
                history.push(`${id}`)
            }}>
                {({name}) => (<span>{name}</span>)}
            </StarshipList>
        );


        const planetDetails = (
            <StarshipDetails itemId={id}/>
        )

        return(
            <ErrorCatch>
                <Row left = {planetList} right = {planetDetails} />
            </ErrorCatch>
        )
    }
}
