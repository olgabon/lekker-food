import React, {Component} from 'react';
import './Favourite.css';
import {Link, Route} from "react-router-dom";
import axios from "axios";
class Favourite extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        favourites: []
    }
    componentDidMount() {
        axios({url: `${process.env.REACT_APP_BACK_END_BASE_URL}users/all-favourites`, withCredentials: true, method: "get"}).then(response => {
            this.setState({favourites: response.data})
        }).catch((err) => {
            this.setState({err})
        })
    }
    render() {
        return (
            <div className="big-div-fav">
                <h1>Favourite recipes</h1>
                <div className="card-div">
                    {this
                        .state
                        .favourites
                        .map(recipe => <div className="favourite-card-div">
                            <a href={recipe.url} target="_blank"><img src={recipe.image} alt=""/> <br/>{recipe.label}</a>
                        </div>)}
                </div>
            </div>
        );
    }
}

export default Favourite;
