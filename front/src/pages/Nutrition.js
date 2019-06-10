import React, { Component } from 'react';
import axios from 'axios';
import './Nutrition.css';

class Nutrition extends Component {

  constructor(props) {
    super(props)
  }
  state = {
    product: "",
    foodInfo: []
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
      axios.get(`https://api.edamam.com/api/nutrition-data?app_id=ac8f5496&app_key=5839ef9966a250d33beeabac527d263a&ingr=${this.state.product}`)
      .then(response => {
        this.setState({foodInfo: response.data})
      })
  }
  

    renderArray = () => {
      let hLabels =[];
        for(let i=0; i<this.state.foodInfo.healthLabels.length;i++) {
          hLabels.push(<li key={i}>{this.state.foodInfo.healthLabels[i]}</li>)
        }
      return hLabels;
    }


      render() {

        return (
          <div>
          <form onSubmit={this.submitForm}>
            <label>Product</label> <br/>
            <textarea type="text"  
                    name="product" value={this.state.product} 
                    onChange={this.handleChange}
            />
            <button type="submit">Search</button>
            
          </form>
          <div className="main-info-div">
            <div className="info-div">
            <h1 id="Nutrition_Facts">Nutrition Facts</h1>
            <h3>Amount Per Serving</h3>
            </div>
                  <div className="item-amount"><h1>Calories</h1> <h2>{this.state.foodInfo.calories}</h2></div>
                      <div>
                    {this.state.foodInfo.calories === 0 ? 
                    "" :
                    <div>
                    
                    {this.state.foodInfo.totalNutrients ? 
                    <div>
                     
                    <div>{this.state.foodInfo.totalNutrients.FAT ? 
                    <div className="item-amount"><h3>Total Fat</h3> <h4>{this.state.foodInfo.totalNutrients.FAT.quantity.toFixed(1)} g</h4></div> :
                    <h3>Total Fat -</h3> 
                    }</div>
                    <div>{this.state.foodInfo.totalNutrients.FASAT ? 
                    <div className="item-amount"><h3>Saturated Fat</h3><h4>{this.state.foodInfo.totalNutrients.FASAT.quantity.toFixed(1)} g</h4></div> :
                    <h3>Saturated Fat -</h3>
                    }</div>
                    
                    <div>{this.state.foodInfo.totalNutrients.CHOLE ? 
                    <div className="item-amount"><h3>Cholesterol</h3> <h4>{this.state.foodInfo.totalNutrients.CHOLE.quantity.toFixed(1)} mg</h4></div> :
                    <h3>Cholesterol -</h3> 
                    }</div>
                    
                    <div>{this.state.foodInfo.totalNutrients.NA ? 
                    <div className="item-amount"><h3>Sodium</h3> <h4>{this.state.foodInfo.totalNutrients.NA.quantity.toFixed(1)} mg</h4></div> :
                    <h3>Sodium -</h3>
                    }</div>
                    
                    <div>{this.state.foodInfo.totalNutrients.CHOCDF ? 
                    <div className="item-amount"><h3>Total Carbohydrate</h3> <h4>{this.state.foodInfo.totalNutrients.CHOCDF.quantity.toFixed(1)} g</h4></div> :
                    <h3>Total Carbohydrate -</h3>
                    }</div>
                     
                    <div>{this.state.foodInfo.totalNutrients.FIBTG ? 
                    <div className="item-amount"><h3>Dietary Fiber</h3><h4>{this.state.foodInfo.totalNutrients.FIBTG.quantity.toFixed(1)} g</h4></div> :
                    <h3>Dietary Fiber -</h3>
                    }</div>
                    
                    <div>{this.state.foodInfo.totalNutrients.SUGAR ? 
                    <div className="item-amount"><h3>Total Sugars</h3> <h4>{this.state.foodInfo.totalNutrients.SUGAR.quantity.toFixed(1)} g</h4></div> :
                    <h3>Total Sugars -</h3>
                    }</div>
                    
                    <div>{this.state.foodInfo.totalNutrients.PROCNT ? 
                    <div className="item-amount"><h3>Protein</h3> <h4>{this.state.foodInfo.totalNutrients.PROCNT.quantity.toFixed(1)} g</h4></div> :
                    <h3>Protein -</h3>
                    }</div>
                    
                    <div>{this.state.foodInfo.totalNutrients.VITD ? 
                    <div className="item-amount"><h3>Vitamin D</h3> <h4>{this.state.foodInfo.totalNutrients.VITD.quantity.toFixed(1)} µg</h4></div> :
                    <h3>Vitamin D -</h3>
                    }</div>
                    
                    <div>{this.state.foodInfo.totalNutrients.CA ? 
                    <div className="item-amount"><h3>Calcium</h3> <h4>{this.state.foodInfo.totalNutrients.CA.quantity.toFixed(1)} mg</h4></div> :
                    <h3>Calcium -</h3>
                    }</div>
                    
                    <div>{this.state.foodInfo.totalNutrients.FE ? 
                    <div className="item-amount"><h3>Iron</h3> <h4>{this.state.foodInfo.totalNutrients.FE.quantity.toFixed(1)} mg</h4></div> :
                    <h3>Iron -</h3> 
                    }</div>
                    
                    <div>{this.state.foodInfo.totalNutrients.K ? 
                    <div className="item-amount"><h3>Potassium</h3> <h4>{this.state.foodInfo.totalNutrients.K.quantity.toFixed(1)} mg</h4></div> :
                    <h3>Potassium -</h3>
                    }</div>
                    </div>
                     :
                    ""
                    }
                    </div>
                    }
                </div>
          </div>
          </div>
          
        )
      }
  }
  export default Nutrition;