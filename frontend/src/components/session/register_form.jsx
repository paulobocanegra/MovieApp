import React from "react";
import { Link } from 'react-router-dom';
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
        this.props.register(user, this.props.history)
            .then(() => this.props.login(user)).then(this.props.history.push('/dogs'));
    }

    render(){
        return (
            <div className="register-form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                    />
                </form>
            </div>
        )
    }
}