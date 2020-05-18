import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hotel from "../components/Hotel";
import HotelsData from "../repository/HotelsData";

class Hotels extends React.Component {


    constructor() {
        super();

        this.state = {
            orderDirection: 'DESC', // два возможных варианта ASC и DESC
            pool: false,
            parking: false,
            wifi: false,
            hotel: false,
            motel: false,
            apartments: false,
        }

        this.togglePool = this.togglePool.bind(this);
        this.toggleParking = this.toggleParking.bind(this);
        this.toggleWifi = this.toggleWifi.bind(this);
        this.toggleHotel = this.toggleHotel.bind(this);
        this.toggleMotel = this.toggleMotel.bind(this);
        this.toggleApartments = this.toggleApartments.bind(this);
    }

    togglePool() {
        this.setState({
            pool: !this.state.pool
        })
    }

    toggleParking() {
        this.setState({
            parking: !this.state.parking
        })
    }

    toggleWifi() {
        this.setState({
            wifi: !this.state.wifi
        })
    }

    toggleHotel() {
        this.setState({
            hotel: !this.state.hotel
        })
    }

    toggleMotel() {
        this.setState({
            motel: !this.state.motel
        })
    }

    toggleApartments() {
        this.setState({
            apartments: !this.state.apartments
        })
    }


    render() {


        let filterUtilities = function (hotel) {
            //в фильтре мы должны вернуть либо true либо false
            if (this.state.pool === false && this.state.parking === false && this.state.wifi === false) {
                return true;
            }

            if (this.state.pool && hotel.pool) {
                return true;
            } else if (this.state.parking && hotel.parking) {
                return true;
            } else if (this.state.wifi && hotel.wifi) {
                return true;
            }
            return false;
        }.bind(this);


        let filterTypes = function (hotel) {
            if (this.state.hotel === false && this.state.motel === false && this.state.apartments === false) {
                return true;
            }

            if (this.state.hotel && hotel.type === 'hotel') {
                return true;
            } else if (this.state.motel && hotel.type === 'motel') {
                return true;
            } else if (this.state.apartments && hotel.type === 'apartments') {
                return true;
            }
            return false;
        }.bind(this);


        let HotelsDataFiltered = HotelsData.filter(filterUtilities).filter(filterTypes);

        //ASC (по возрастанию) или DESC (по убыванию).
        if (this.state.orderDirection === 'ASC') {
            //соритировка от меньшего к большему
            HotelsDataFiltered.sort(function (hotel1, hotel2) {
                if (hotel1.priceFrom > hotel2.priceFrom) {
                    return 1;
                }
                if (hotel1.priceFrom < hotel2.priceFrom) {
                    return -1;
                }
                return 0;
            });
        }

        if (this.state.orderDirection === 'DESC') {
            //соритировка от большего к меньшему
            HotelsDataFiltered.sort(function (hotel1, hotel2) {
                if (hotel1.priceFrom > hotel2.priceFrom) {
                    return -1;
                }
                if (hotel1.priceFrom < hotel2.priceFrom) {
                    return 1;
                }
                return 0;
            });
        }


        return <div>
            <Header/>
            <div className="filters">
                <div className="filters-left">
                    <div className="infrastucture">
                        <h3>ИНФРАСТРУКТУРА:</h3>
                        <div className="checkbox">
                            <input
                                className="fill-checkbox"
                                type="checkbox"
                                id="checkbox_1"
                                name="fill"
                                value="pool"
                                checked={this.state.pool}
                            />
                            <label
                                htmlFor="checkbox_1"
                                onClick={this.togglePool}
                            >БАССЕЙН</label>
                        </div>
                        <div className="checkbox">
                            <input
                                className="fill-checkbox"
                                type="checkbox"
                                id="checkbox_2"
                                name="fill"
                                value="parking"
                                checked={this.state.parking}
                            />
                            <label
                                htmlFor="checkbox_2"
                                onClick={this.toggleParking}
                            >ПАРКОВКА</label>
                        </div>
                        <div className="checkbox">
                            <input
                                className="fill-checkbox"
                                type="checkbox"
                                id="checkbox_3"
                                name="fill"
                                value="wi-fi"
                                checked={this.state.wifi}
                            />
                            <label
                                htmlFor="checkbox_3"
                                onClick={this.toggleWifi}
                            >WI-FI</label>
                        </div>
                    </div>
                    <div className="type-of-house">
                        <h3>ТИП ЖИЛЬЯ:</h3>
                        <div className="checkbox">
                            <input
                                className="fill-checkbox"
                                type="checkbox"
                                id="checkbox_4"
                                name="fill"
                                value="hotel"
                                checked={this.state.hotel}
                            />
                            <label
                                htmlFor="checkbox_4"
                                onClick={this.toggleHotel}
                            >ГОСТИНИЦА</label>
                        </div>
                        <div className="checkbox">
                            <input
                                className="fill-checkbox"
                                type="checkbox"
                                id="checkbox_5"
                                name="fill"
                                value="motel"
                                checked={this.state.motel}
                            />
                            <label
                                htmlFor="checkbox_5"
                                onClick={this.toggleMotel}
                            >МОТЕЛЬ</label>
                        </div>
                        <div className="checkbox">
                            <input
                                className="fill-checkbox"
                                type="checkbox"
                                id="checkbox_6"
                                name="fill"
                                value="apartments"
                                checked={this.state.apartments}
                            />
                            <label
                                htmlFor="checkbox_6"
                                onClick={this.toggleApartments}
                            >АПАРТАМЕНТЫ</label>
                        </div>
                    </div>
                </div>
                <div className="filters-right">
                    <h3>Стоимость в сутки (Р):</h3>
                    <table>
                        <tr>
                            <td>ОТ: 0</td>
                            <td>ДО: 3000</td>
                        </tr>
                    </table>
                    <div className="price-slider">
                        <div className="slider">
                            <div
                                className="bar price-range"
                                data-start="0"
                                data-end="3000"
                                style={{
                                    left: 0,
                                    width: '94%'
                                }}
                            >
                                <div className="lp" data-pos="0"><span/></div>
                                <div className="rp" data-pos="1"><span/></div>
                            </div>
                        </div>
                    </div>
                    <button className="btn">ПОКАЗАТЬ</button>
                </div>
            </div>
            <div className="names">
                <div className="found">
                    <h1>НАЙДЕНО: {HotelsDataFiltered.length}</h1>
                </div>
                <ul className="sort">СОРТИРОВКА
                    <li><a href="#">ПО ЦЕНЕ</a></li>
                    <li><a href="#">ПО ТИПУ</a></li>
                    <li><a href="#">ПО РЕЙТИНГУ</a></li>
                </ul>
                <div className="sort-up-down">
                    <div className="up">
                    </div>
                    <div className="down">
                    </div>
                </div>
            </div>
            <div className="clr"/>

            {HotelsDataFiltered.map(function (hotel) {
                return <Hotel
                    name={hotel.name}
                    picture={hotel.picture}
                    priceFrom={hotel.priceFrom}
                    stars={hotel.stars}
                    rating={hotel.rating}
                />
            })}

            <Footer/>
        </div>
    };
}

export default Hotels;
