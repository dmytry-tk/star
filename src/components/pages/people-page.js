import React, { Component } from 'react';
import SwapiService from '../../services/services'
import ErrorCatch from "../error-catch";
import Row from "../row";
import {PersonDetails, PersonList} from "../sw-components";
import { withRouter } from 'react-router-dom'

class PeoplePage extends Component{

    swapiService = new SwapiService()

    state={
        selectedPerson: 3,
    }

    onItemSelected = (selectedPerson) => {
        this.setState({selectedPerson})
    }

    render(){
        const {selectedPerson} = this.state
        const {history, match} = this.props
        const { id=1 } = match.params;
        const personList = (
            <PersonList onItemSelected = {(id) => history.push(id)}>
                {({name}) => (<span>{name}</span>)}
            </PersonList>
        );

        const personDetails = (
            <PersonDetails itemId={id}/>
        )

        return(
            <ErrorCatch>
                <Row left = {personList} right = {personDetails} />
            </ErrorCatch>
        )
    }
}

export default withRouter(PeoplePage)