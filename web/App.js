import React from 'react';
import classnames from 'classnames';

import LoginForm from "./Components/LoginForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
        };
        this.login = this.login.bind(this);
    }

    login(email, password) {
        const body = {
            email,
            password,
        }
        this.setState({
            loading: true,
            error: false,
        })
        fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((res) => {
                this.setState({
                    loading: false,
                });

                if (res.status >= 200 && res.status < 400) {
                    window.alert("Login Successed");
                } else {
                    this.setState({
                        error: true,
                    });
                }
            })
    }

    render() {
        return (
            <div>
                <div className="panel">
                    <p className={classnames("logo", { "logo-spin": this.state.loading })}>Logo</p>

                    <LoginForm error={this.state.error} login={this.login} />
                </div>
            </div>
        )
    }
}

export default App;
