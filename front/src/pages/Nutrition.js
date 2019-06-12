import React, {Component} from 'react';
import axios from 'axios';
import './Nutrition.css';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Nutrition extends Component {

    constructor(props) {
        super(props)
    }
    state = {
        product: "",
        foodInfo: []
    }

    componentDidMount() {}
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm = (e) => {
        e.preventDefault()
        axios//
            .get(`https://api.edamam.com/api/nutrition-data?app_id=${process.env.REACT_APP_NUTRITION_APP_ID}&app_key=${process.env.REACT_APP_NUTRITION_APP_KEY}&ingr=${this.state.product}`)
            .then(response => {
                this.setState({foodInfo: response.data})
            })
    }

    renderArray = () => {
        let hLabels = [];
        for (let i = 0; i < this.state.foodInfo.healthLabels.length; i++) {
            hLabels.push(
                <li key={i}>{this.state.foodInfo.healthLabels[i]}</li>
            )
        }
        return hLabels;
    }

    render() {

        return (
            <div className="big-div">
                <div className="left-div-nutr">
                    <div className="left-div-nutr-card">
                        <form onSubmit={this.submitForm}>
                            <h1>Search for nutrition information</h1>
                            <div className="input-div">
                                <input
                                    type="text"
                                    placeholder="100gr chicken"
                                    name="product"
                                    value={this.state.product}
                                    onChange={this.handleChange}/>
                                <button type="submit">
                                    <div><FontAwesomeIcon icon={faSearch}/></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right-div-nutr">
                    <div className="nutr-content-div">
                        <div className="info-div">
                            <h1 id="Nutrition_Facts">Nutrition Facts</h1>
                            <p>Amount Per Serving</p>
                        </div>
                        <div className="margin-info">
                            <div className="item-amount">
                                <h2>Calories</h2>
                                <h2>{this.state.foodInfo.calories}</h2>
                            </div>
                            <div>
                                {this.state.foodInfo.calories === 0
                                    ? ""
                                    : <div>

                                        {this.state.foodInfo.totalNutrients
                                            ? <div>

                                                    <div>{this.state.foodInfo.totalNutrients.FAT
                                                            ? <div className="item-amount">
                                                                    <p>
                                                                        <b>Total Fat</b>
                                                                    </p>
                                                                    <p>
                                                                        <b>{this
                                                                                .state
                                                                                .foodInfo
                                                                                .totalNutrients
                                                                                .FAT
                                                                                .quantity
                                                                                .toFixed(1)}
                                                                            g</b>
                                                                    </p>
                                                                </div>
                                                            : ""
}</div>
                                                    <div>{this.state.foodInfo.totalNutrients.FASAT
                                                            ? <div className="item-amount">
                                                                    <p>Saturated Fat</p>
                                                                    <p>{this
                                                                            .state
                                                                            .foodInfo
                                                                            .totalNutrients
                                                                            .FASAT
                                                                            .quantity
                                                                            .toFixed(1)}
                                                                        g</p>
                                                                </div>
                                                            : ""
}</div>

                                                    <div>{this.state.foodInfo.totalNutrients.CHOLE
                                                            ? <div className="item-amount">
                                                                    <p>
                                                                        <b>Cholesterol</b>
                                                                    </p>
                                                                    <p>
                                                                        <b>{this
                                                                                .state
                                                                                .foodInfo
                                                                                .totalNutrients
                                                                                .CHOLE
                                                                                .quantity
                                                                                .toFixed(1)}
                                                                            mg</b>
                                                                    </p>
                                                                </div>
                                                            : ""
}</div>

                                                    <div>{this.state.foodInfo.totalNutrients.NA
                                                            ? <div className="item-amount">
                                                                    <p>
                                                                        <b>Sodium</b>
                                                                    </p>
                                                                    <p>
                                                                        <b>{this
                                                                                .state
                                                                                .foodInfo
                                                                                .totalNutrients
                                                                                .NA
                                                                                .quantity
                                                                                .toFixed(1)}
                                                                            mg</b>
                                                                    </p>
                                                                </div>
                                                            : ""
}</div>

                                                    <div>{this.state.foodInfo.totalNutrients.CHOCDF
                                                            ? <div className="item-amount">
                                                                    <p>
                                                                        <b>Total Carbohydrate</b>
                                                                    </p>
                                                                    <p>
                                                                        <b>{this
                                                                                .state
                                                                                .foodInfo
                                                                                .totalNutrients
                                                                                .CHOCDF
                                                                                .quantity
                                                                                .toFixed(1)}
                                                                            g</b>
                                                                    </p>
                                                                </div>
                                                            : ""
}</div>

                                                    <div>{this.state.foodInfo.totalNutrients.FIBTG
                                                            ? <div className="item-amount">
                                                                    <p>Dietary Fiber</p>
                                                                    <p>{this
                                                                            .state
                                                                            .foodInfo
                                                                            .totalNutrients
                                                                            .FIBTG
                                                                            .quantity
                                                                            .toFixed(1)}
                                                                        g</p>
                                                                </div>
                                                            : ""
}</div>

                                                    <div>{this.state.foodInfo.totalNutrients.SUGAR
                                                            ? <div className="item-amount">
                                                                    <p>Total Sugars</p>
                                                                    <p>{this
                                                                            .state
                                                                            .foodInfo
                                                                            .totalNutrients
                                                                            .SUGAR
                                                                            .quantity
                                                                            .toFixed(1)}
                                                                        g</p>
                                                                </div>
                                                            : ""
}</div>

                                                    <div>{this.state.foodInfo.totalNutrients.PROCNT
                                                            ? <div className="item-amount">
                                                                    <p>
                                                                        <b>Protein</b>
                                                                    </p>
                                                                    <p>
                                                                        <b>{this
                                                                                .state
                                                                                .foodInfo
                                                                                .totalNutrients
                                                                                .PROCNT
                                                                                .quantity
                                                                                .toFixed(1)}
                                                                            g</b>
                                                                    </p>
                                                                </div>
                                                            : ""
}</div>

                                                    <div>{this.state.foodInfo.totalNutrients.VITD
                                                            ? <div className="item-amount">
                                                                    <p>Vitamin D</p>
                                                                    <p>{this
                                                                            .state
                                                                            .foodInfo
                                                                            .totalNutrients
                                                                            .VITD
                                                                            .quantity
                                                                            .toFixed(1)}
                                                                        µg</p>
                                                                </div>
                                                            : ""
}</div>

                                                    <div>{this.state.foodInfo.totalNutrients.CA
                                                            ? <div className="item-amount">
                                                                    <p>Calcium</p>
                                                                    <p>{this
                                                                            .state
                                                                            .foodInfo
                                                                            .totalNutrients
                                                                            .CA
                                                                            .quantity
                                                                            .toFixed(1)}
                                                                        mg</p>
                                                                </div>
                                                            : ""
}</div>

                                                    <div>{this.state.foodInfo.totalNutrients.FE
                                                            ? <div className="item-amount">
                                                                    <p>Iron</p>
                                                                    <p>{this
                                                                            .state
                                                                            .foodInfo
                                                                            .totalNutrients
                                                                            .FE
                                                                            .quantity
                                                                            .toFixed(1)}
                                                                        mg</p>
                                                                </div>
                                                            : ""
}</div>

                                                    <div>{this.state.foodInfo.totalNutrients.K
                                                            ? <div className="item-amount">
                                                                    <p>Potassium</p>
                                                                    <p>{this
                                                                            .state
                                                                            .foodInfo
                                                                            .totalNutrients
                                                                            .K
                                                                            .quantity
                                                                            .toFixed(1)}
                                                                        mg</p>
                                                                </div>
                                                            : ""
}</div>
                                                </div>
                                            : ""
}
                                    </div>
}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Nutrition;