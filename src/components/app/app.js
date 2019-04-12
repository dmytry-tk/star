import React, { Component } from 'react';
import './app.css'
import Header from '../header';
import Row from "../row";
import ItemDetails, {Record} from "../item-details";
import SwapiService from "../../services/services";
import ItemList from "../item-list";
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
} from "../sw-components";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planet-page";
import StarshipsPage from "../pages/starship-page";
import RandomPlanet from "../planet-details";
import ErrorCatch from "../error-catch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "../pages/login-page";
import SecretPage from "../pages/secret-page";
import Switch from "react-router-dom/es/Switch";
import Redirect from "react-router-dom/es/Redirect";


export default class App extends Component{

    swapiService = new SwapiService()

    state = {
      showRandomPlanet: true,
      isLoggedIn: false,
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        const {isLoggedIn} = this.state
        return (
            <ErrorCatch>
                <Router>
                    <div>
                        <Header/>
                        <RandomPlanet />
                        {/*<PeoplePage/>*/}
                        {/*<PlanetsPage/>*/}
                        {/*<StarshipsPage/>*/}
                        <Switch>
                            <Route path={"/"}
                                   render={() => <h2>Welcome to StarDB</h2>}
                                   exact />
                            <Route path={"/people/:id?"} component={PeoplePage}/>
                            <Route path={"/planets"} component={PlanetsPage}/>
                            <Route path={"/starships"} exact component={StarshipsPage}/>
                            <Route path={"/starships/:id"}
                                   render={({match, location, history}) => {
                                       return <StarshipDetails itemId={match.params.id} />
                                   }} />
                            <Route path={"/login"}
                                   render={() => {
                                       return <LoginPage
                                                isLoggedIn={isLoggedIn}
                                                onLogin={this.onLogin}/>
                                   }}/>
                            <Route path={"/secret"}
                                   render={() => {
                                       return <SecretPage
                                           isLoggedIn={isLoggedIn}/>
                                   }}/>
                            <Redirect to={"/"} />
                        </Switch>
                    </div>
                </Router>
            </ErrorCatch>
        );
    };
}