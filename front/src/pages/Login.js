import React, {Component} from 'react'
import axios from "axios";
import './Login.css';
import qs from "qs"

export default class Login extends Component {

    state = {
        name: "",
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
        var user = {
            name: this.state.name,
            password: this.state.password
        }
        axios({
            url: `${process.env.REACT_APP_BACK_END_BASE_URL}users/login`,
            data: qs.stringify(user),
            method: "post",
            withCredentials: true
        }).then((response) => {
            this
                .props
                .fetchUser()
            this
                .props
                .history
                .push("/")
        }).catch((err) => {
            this.setState({err})
        })
    }
    render() {
        return (
            <div className="big-div-login">
                <div className="form-div">
                    <form className="form-div-form" onSubmit={this.submitForm}>

                        <h1>Log in
                        </h1>
                        <input
                            type="text"
                            placeholder="username"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}/><br/>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}/><br/>
                        <button type="submit">Log in</button>

                    </form>
                    {this.state.err
                        ? <h1>{this.state.err.response.data.message}</h1>
                        : ""}
                </div>
            </div>
        )
    }
}