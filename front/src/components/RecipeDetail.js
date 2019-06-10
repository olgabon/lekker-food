import React, { Component } from 'react';
import './RecipeDetail.css';
class RecipeDetail extends Component {
    constructor(props){
      super(props)
    }
    render() {
        let returnVal = this.props.location.info.ingredients.map((item)=>
        <div><ul><li>{item.text} <span> </span>
         {item.weight.toFixed(0)}gr </li></ul></div>)
         let dietsVal = this.props.location.info.healthLabels.map((item)=>
         <div>{item}</div>)
      return (
        <div className="recipe-ingr">
        <h2>{this.props.location.info.label}</h2>
        <p>Total calories: {this.props.location.info.calories.toFixed(0)}</p>
        <p>Total weight: {this.props.location.info.totalWeight.toFixed(0)}gr</p>
        <p><div>{this.props.location.info.healthLabels === 0 ? 
        "":
        <div>Diets: <ul>{dietsVal}</ul> </div>  }
        </div>
        </p>
        <p>Ingredients:{returnVal}</p>
        <p>Check how to cook <a href={this.props.location.info.url} target="_blank">here</a></p>
        </div>
      );
    }
}

export default RecipeDetail;


