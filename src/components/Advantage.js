import React from 'react';

function Advantage(props) {

    return (
        <div className="advantage">
            <h4>{props.name}</h4>
            <h5>{props.number}</h5>
            <h5>{props.description}</h5>
        </div>
    );
}

export default Advantage;