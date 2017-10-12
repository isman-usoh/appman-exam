import "./LoginForm.scss";

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginSubmit() {
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        this.props.login(email, password);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" ref={(element) => this.emailInput = element} className="form-control" id="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="email" ref={(element) => this.passwordInput = element} className="form-control" id="password" placeholder="Enter password" />
                </div>

                {
                    this.props.error &&
                    <p className="red">Email or password in corrent</p>
                }

                <div className="center form-group">
                    <button type="button" onClick={this.handleLoginSubmit} className="btn btn-primary">Sign In</button>
                </div>

                <div className="row form-group">
                    <a className="col-6 left" href="#">Forget password</a>
                    <a className="col-6 right" href="#">Create new account</a>
                </div>
            </form>
        );
    }
}

export default LoginForm;