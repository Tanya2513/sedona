import React from 'react';

function Feature(props) {

    return (
        <div className="feature">
            <div className={'i-' + props.icon}/>
            <h4>{props.name}</h4>
            <h5>{props.description}</h5>
        </div>
    );
}

export default Feature;