import React, { Component } from 'react';
import './error-catch.sass'
import ErrorIndicator from "../error-indicator";

export default class ErrorCatch extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(){
        // debugger
        this.setState({
            hasError: true
        })
    }
    render(){

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        return this.props.children;
    }
}