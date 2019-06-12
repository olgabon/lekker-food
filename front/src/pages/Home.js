import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
function Home() {
    return (
        <div className="big-div">
            <div className="left-div">
                <div className="left-div-content">
                    <h3>Find more about your food</h3>
                    <Link to="/nutrition">Check nutritions information</Link>
                    <Link to="/recipes">
                        <span></span>Search for recipes ideas
                        <span></span>
                    </Link>
                </div>
            </div>
            <div className="righ-div">
                <div className="white-bckgr-div">
                    <h1>Eat
                        <br/>healthy
                        <br/>feel
                        <br/>great</h1>
                </div>
            </div>

        </div>
    )
}

export default Home;