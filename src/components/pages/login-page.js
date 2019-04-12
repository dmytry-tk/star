import React from 'react';
import Redirect from "react-router-dom/es/Redirect";

const LoginPage = ({ isLoggedIn, onLogin }) => {

    if (isLoggedIn) {
        return <Redirect to={"/"} />
    }

    return (
        <div>
            <p>Login to see secret page!</p>
            <div className="button" onClick={onLogin}>Login</div>
        </div>
    )
}

export default LoginPage;