import React, { Component } from 'react';
import axios from 'axios';
import './Recipes.css';
import { Link, Route} from "react-router-dom";
import RecipeDetail from '../components/RecipeDetail.js'

class Recipes extends Component{
    constructor(props) {
        super(props)
      }
      state = {
        product: "",
        foodInfo: [],
        //from: "",
        //to: ""
      }
        
    componentDidMount() {

    }
    
    handleChange = (e)=> {
          this.setState({
              [e.target.name]: e.target.value  
        })
    }
    submitForm = (e)=> {
      e.preventDefault()
      axios.get(`https://api.edamam.com/search?q=${this.state.product}&app_id=6a668225&app_key=162acc6507b594ebe5075d2266f69592`)
      //&from=${this.state.from}&to=${this.state.to}
      .then(response => {
        this.setState({foodInfo: response.data})
      })
    }
    showArray = () => {
        let returnVal;
        if(this.state.foodInfo.hits) {
             returnVal = this.state.foodInfo.hits.map((item, key) =>
            <div  className="singleCard" key={item.recipe.uri}>
                <div>
                <Link to={{
                pathname: "/recipes/detail",
                info: item.recipe
                    }}
                    >                
                    <img src={item.recipe.image} alt=""/>
                    {item.recipe.label} </Link>
                </div>
            </div>
               );
        } else {
            returnVal = ""
        }
        return returnVal
    }
    
    render() {

        let recipeCard = this.showArray()

        return (
            <div>
                 <form onSubmit={this.submitForm}>
            <label>Product</label> <br/>
            <textarea type="text"  
                    name="product" value={this.state.product} 
                    onChange={this.handleChange}
            /> <br/>

            <button type="submit">Search</button>   
          </form>
          <div className="recipes-div">

          <section className="recipeCard">
                {recipeCard}    
          </section>
          <div className="recipes-card">
          <Route exact path="/recipes/detail" component={RecipeDetail} />
          </div>
          </div>
            </div>
    )}
}
//            <label>Serves</label> <br/>
//            <input type="number" name="from" placeholder="from" onChange={this.handleChange} value={this.state.from}/>
//            <input type="number" name="to" placeholder="to" onChange={this.handleChange} value={this.state.to}/>
export default Recipes;
