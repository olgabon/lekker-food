# Health Style
Health Style is an application that helps to search for food inspiration and nutrition information. The main feature is that each user can save his favourites recipes.
## Installation
Go to http://localhost:3000/ or https://lekkerfood.herokuapp.com/ (deployed version) to open the app.
## Introduction
* Health Style was built with React and Node.js.
* There are two API's: https://developer.edamam.com/edamam-nutrition-api for nutrition information and https://developer.edamam.com/edamam-recipe-api for recipe search.
Also I used local database for registered users. 
* The app contains the following pages:

  **Home**: Index page, 
  
  **Sign up**: Sign up for first time users,
  
  **Log in**: Log in for existing users,
  
  **Favourite**: User's private list of favourite recipes. It`s visible once you authorized.
  
  **Nutrition**: Search for the nutrition information.
  
  **Recipes**: Search for the recipes by ingredient. 
  
# Instructions
  
When user goes to the main page, he is able to sign up, log in, check nutrition information of his food or recipes. 

The search for nutrition information is made by API which accepts the input of quantity + ingredient (100 gr chicken). 

The search for recipes is conduct by API which accepts the input of a dish or product.

After logging in, users can add favourite recipes in their own list. 
