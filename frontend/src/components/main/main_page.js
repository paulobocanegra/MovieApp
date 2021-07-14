import "./main.css"
import React from 'react';
import RegisterFormContainer from '../session/register_container'
import LoginFormContainer from '../session/login_container'

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <h1 className="app-title">Movie App</h1>
                <div className="session-wrapper">
                    <RegisterFormContainer />
                    <LoginFormContainer />
                </div>
                <footer>
                    Paulo Bocanegra
                </footer>
            </div>
        );
    }
}

export default MainPage;