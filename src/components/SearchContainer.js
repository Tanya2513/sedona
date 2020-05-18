import React from "react";

export default class SearchContainer extends React.Component {

    constructor(props) {
        super(props);

        //начальное состояние
        this.state = {
            isSearchFormVisible: false,
            children: 0,
            adult: 2
        };

        this.toggleForm = this.toggleForm.bind(this);
        this.changeAdult = this.changeAdult.bind(this);
    }

    toggleForm() {

        //изменение состояния обязательно через setState()
        this.setState({
            isSearchFormVisible: !this.state.isSearchFormVisible
        })
    }

    changeAdult(diff) {
        let result = this.state.adult + diff;
        if (result < 0) {
            this.setState({
                adult: 0
            })
        } else {
            this.setState({
                adult: result
            })
        }
    }

    changeChildren(diff) {
        let result = this.state.children + diff;
        if (result < 0) {
            this.setState({
                children: 0
            })
        } else {
            this.setState({
                children: result
            })
        }
    }

    render() {
        let formClass = 'dropdown-form';

        if (this.state.isSearchFormVisible) {
            formClass = formClass + ' block';
        }

        return <div className="container5">
            <h2>ЗАИНТЕРЕСОВАЛИСЬ?</h2>
            <h3>Укажите предполагаемые даты поездки,
                и мы покажем вам лучшие предложения гостиниц в седоне</h3>
            <div className="form-search">
                <button
                    className="btn"
                    onClick={this.toggleForm}
                >ПОИСК ГОСТИННИЦЫ В СЕДОНЕ
                </button>
                <form
                    className={formClass}
                    id="search-form"
                >
                    <div className="row">
                        <div className="left-form">
                            <label htmlFor="datepicker1">ДАТА ВЫЕЗДА:</label>
                        </div>
                        <div className="right-form">
                            <div className="input-wrapper">
                                <input className="date-input" id="datepicker1" name="date" placeholder="дата выезда"
                                       type="text"
                                       value="24-APRIL-2019"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left-form">
                            <label htmlFor="datepicker">ДАТА ЗАЕЗДА:</label>
                        </div>
                        <div className="right-form">
                            <div className="input-wrapper">
                                <input className="date-input" id="datepicker" name="date" placeholder="дата заезда"
                                       type="text"
                                       value="7-JULY-2019"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left-form">
                            <label>ВЗРОСЛЫЕ:</label>
                        </div>
                        <div className="right-form">
                            <div className="input-wrapper-number">
                                <button className="btn-number" type="button"
                                        onClick={() => this.changeAdult(-1)}>-
                                </button>
                                <input id="input-adult" className="adult" value={this.state.adult}
                                       type="text"/>
                                <button onClick={() => this.changeAdult(1)} type="button"
                                        className="btn-number">+
                                </button>
                            </div>
                            <label className="children-label">ДЕТИ:</label>
                            <div className="input-wrapper-number">
                                <button className="btn-number" type="button"
                                        onClick={() => this.changeChildren(-1)}>-
                                </button>
                                <input id="input-children" className="children" value={this.state.children}
                                       type="text"/>
                                <button onClick={() => this.changeChildren(1)} type="button"
                                        className="btn-number">+
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className="btn">НАЙТИ</button>
                </form>
            </div>
        </div>
    };
}