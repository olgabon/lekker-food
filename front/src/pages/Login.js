import React, { Component } from 'react'
import axios from "axios";
//import './Login.css';
import qs from "qs"

export default class Login extends Component {

    state = {
        name: "",
        password: "",
        err: null
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm = (e)=> {
        e.preventDefault()
        debugger
        var user = {
            name: this.state.name,
            password: this.state.password
        }
        axios({
            url: "http://localhost:5000/users/login",
            data: qs.stringify(user),
            method: "post",
            withCredentials: true
        })
        .then((response)=> {
            this.props.fetchUser()
            this.props.history.push("/recipes")
        })
        .catch((err)=> {
            debugger
            this.setState({
                err
            })
        })
    }
    render() {
        return (
            <div className="form-div">
                <form onSubmit={this.submitForm}>
                    <h1>Log in </h1>
                    <label>Username</label> <br/>
                    <input  type="text"  
                            name="name" value={this.state.name} 
                            onChange={this.handleChange} /><br/>
                    <label>Password</label> <br/>
                    <input  type="password"  
                            name="password" value={this.state.password} 
                            onChange={this.handleChange}/><br/>
                    <button type="submit">Log in</button>
                    
                </form>
                {this.state.err? <h1>{this.state.err.response.data.message}</h1>:""} 
            </div>
        )
    }
}