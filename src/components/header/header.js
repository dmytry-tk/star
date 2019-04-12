import React, { Component } from 'react';
import './header.sass'
import { Link } from 'react-router-dom';


export default class Header extends Component{
    render(){
        return(
            <header className="main-header">
                <div className="logo">
                    <Link to="/" className="link">Star DB</Link>
                </div>
                <div className="menu">
                    <Link to="/people/" className="link">People</Link>
                    <Link to="/planets/" className="link">Planets</Link>
                    <Link to="/starships/" className="link">Starships</Link>
                    <Link to="/login/" className="link">Login</Link>
                    <Link to="/secret/" className="link">Secret</Link>
                </div>
            </header>
        )
    }
}