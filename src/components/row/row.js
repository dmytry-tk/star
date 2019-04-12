import React, { Component } from 'react';
import './row.sass'


const Row = ({ left, right }) => {
    return(
        <div className="two-columns">
            <div className="item">
                {left}
            </div>
            <div className="item">
                {right}
            </div>
        </div>
    )
}

export default Row