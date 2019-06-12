import React, {Component} from 'react';
import './RecipeDetail.css';
import {Link, Route} from "react-router-dom";
import qs from "qs";
import axios from "axios";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class RecipeDetail extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        favourite: ""
    }
    componentDidMount() {}
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveFavourite = (e) => {
        e.preventDefault()
        let recipe = {
            uri: this.props.location.info.uri,
            label: this.props.location.info.label,
            image: this.props.location.info.image,
            url: this.props.location.info.url

        }

        axios({
            url: `${process.env.REACT_APP_BACK_END_BASE_URL}users/add-to-favourite`,
            //`${REACT_APP_BACK_END_BASE_URL}users/add-to-favourite`
            method: "post",
            data: qs.stringify(recipe),
            withCredentials: true
        })
    }

    render() {

        let returnVal = this
            .props
            .location
            .info
            .ingredients
            .map((item) => <div className="returnVal-div">
                   <li> {item.text}
                        <span> </span>
                        <b>{item
                            .weight
                            .toFixed(0)}gr</b>
                    </li> 
            </div>)
        let dietsVal = this
            .props
            .location
            .info
            .healthLabels
            .map((item) => <div>{item}</div>)
        return (
            <div className="recipe-ingr">
                <h2>{this.props.location.info.label}</h2>
                <p>
                    <b>Total amount of calories: {this
                            .props
                            .location
                            .info
                            .calories
                            .toFixed(0)}</b>
                </p>
                <p>
                    <b>Total weight: {this
                            .props
                            .location
                            .info
                            .totalWeight
                            .toFixed(0)}gr</b>
                </p>
                <p>
                    <div>{this.props.location.info.healthLabels === 0
                            ? ""
                            : <div>
                                <b>Diets:</b>
                                <ul>{dietsVal}</ul>
                            </div>}
                    </div>
                </p>
                <p>
                    <b>Ingredients:</b>{returnVal}</p>
                <p>Check how to cook <span></span>
                    <a href={this.props.location.info.url} target="_blank">
                        <b>here</b>
                    </a>
                </p>
                <button onClick={this.saveFavourite} className="btn-favourite"><FontAwesomeIcon icon={faHeart}/>
                <span> </span>Save as favourite</button>
            </div>
        );
    }
}

export default RecipeDetail;
