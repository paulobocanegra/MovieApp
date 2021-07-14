import React from "react";
// import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password2: "",
            errors: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };
        this.props.register(user)
            .then(() => this.props.login(user)).then(this.props.history.push('/movies'));
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>{this.state.errors[error]}</li>
                ))}
            </ul>
        );
    }

    render(){
        return (
            <div className="register-form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label> First Name:
                        <input 
                            type="text" 
                            value={this.state.firstName}
                            onChange={this.update("firstName")}
                            placeholder="Please enter your first name"
                        />
                    </label>
                    <br />
                    <label> Last Name:
                        <input 
                            type="text" 
                            value={this.state.lastName}
                            onChange={this.update("lastName")}
                            placeholder="Please enter your last name"
                        />
                    </label>
                    <br />
                    <label>Email:
                        <input 
                            type="text" 
                            value={this.state.email}
                            onChange={this.update("email")}
                            placeholder="Please enter your email"
                        />
                    </label>
                    <br />
                    <label>Password:
                        <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                    </label>
                    <br />
                    <label>Confirm Password:
                        <input 
                            type="password" 
                            value={this.state.password2}
                            onChange={this.update("password2")}
                        />
                    </label>
                    <br />
                    <input className="signup-button" type="submit" value="Register" />
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default withRouter(RegisterForm);