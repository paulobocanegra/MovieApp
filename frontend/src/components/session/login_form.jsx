import React from "react";
// import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.login(user)
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

    render() {
        return (
            <div className="register-form-wrapper">
                <form onSubmit={this.handleSubmit}>
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
                    <input className="signup-button" type="submit" value="Login" />
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);