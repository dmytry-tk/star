
import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withData } from '../hoc-helper';
import SwapiService from '../../services/services'

const swapiService = new SwapiService();
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getStarshipImage,
    getPlanetImage
} = swapiService;

const PersonDetails = ({ itemId }) => {

    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>

            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )

};

const PlanetDetails = ({ itemId }) => {
    return(
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>

            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    )
};

const StarshipDetails = ( {itemId} ) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>

            <Record field="name" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}