import React from 'react';

export default function (props) {

    console.log(props)

    return (
        <div className="hotel row">
            <div className="col-md-3 text-center">
                <img
                    src={props.picture}
                />
            </div>
            <div className="col">
                <div className="reservation">
                    <a href="#">{props.name}</a>
                    <h2>ГОСТИНИЦА</h2>
                    <h2 className="price">{props.priceFrom}</h2>
                    <div className="">
                        <button className="details"> ПОДРОБНЕЕ</button>
                        <button className="button-reservation">ЗАБРОНИРОВАТЬ</button>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="rating">
                    <div className="stars">
                        {[...Array(props.stars)].map((x, i) =>
                            <div className="star"/>
                        )}
                    </div>
                    <div className="mark">РЕЙТИНГ: {props.rating}</div>
                </div>
            </div>
        </div>
    );
}