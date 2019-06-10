import React, { Component } from 'react'
import axios from "axios";
//import './Signup.css';


export default class Signup extends Component {

    state = {
        name: "",
        email: "",
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
        let signupUser = this.state
debugger
        axios({
            url: "http://localhost:5000/users/signup",
            data: signupUser,
            method: "post",
            withCredentials: true
        })
        .then((response)=> {
debugger
            console.log('signup succesfull')
            this.props.history.push("/")
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
                    <h1>Sign up</h1>
                    <label>Username</label> <br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>
                    <label>Email</label> <br/>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br/>
                    <label>Password</label> <br/>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
                    <button type="submit">Sign up</button>
                </form>
                {this.state.err? <h1>{this.state.err.response.data.message}</h1>:""}
            </div>
        )
    }
}