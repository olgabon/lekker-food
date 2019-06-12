import React, {Component} from 'react'
import axios from "axios";
import './Login.css';
import qs from "qs"

export default class Signup extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        err: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        let signupUser = this.state
        var user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        axios({
            url: `${process.env.REACT_APP_BACK_END_BASE_URL}users/signup`,
            data: qs.stringify(user),
            method: "post",
            withCredentials: true
        }).then((response) => {

            console.log('signup succesfull')
            this
                .props
                .history
                .push("/login")
        }).catch((err) => {

            this.setState({err})
        })
    }
    render() {
        return (
            <div className="big-div-login">
                <div className="form-div">
                    <form className="form-div-form" onSubmit={this.submitForm}>
                        <h1>Sign up</h1>
                        <input
                            placeholder="username"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}/><br/>
                        <input
                            placeholder="email"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}/><br/>
                        <input
                            placeholder="password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}/><br/>
                        <button type="submit">Sign up</button>
                        {this.state.err
                            ? <h1>{this.state.err.response.data.message}</h1>
                            : ""}
                    </form>
                </div>
            </div>
        )
    }
}