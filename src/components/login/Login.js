import React, { Component } from 'react';
import './Login.css';
import Home from '../home/Home';
import Header from '../header/Header';
import { login } from '../../actions/loginActions'; 
import { connect } from 'react-redux';
import { isLoggedIn } from '../../reducers/login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLogin: login,
            errorPresent: false
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password).then(success => {
            this.props.history.push("/home");
        }, err => {
            this.setState({
                errorPresent: true, 
            });
        })
    };

    handleSignOut = () => {
        this.setState({ isLogin: false, username: '', password: '' });
    };

    render() {
        return (
            <div>
                {this.props.isLoggedIn ?
                    <div>
                        <div>User is already logged In</div>
                        <a href="/home">Go Home</a>
                    </div>
                    :
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Username</label>
                                <input
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    placeholder="username"
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <input
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                    placeholder="password"
                                />
                            </div>
                            <button className="login-button" type="submit">
                                Login
                            </button>
                            {this.state.errorPresent && 
                                <div className="login-error-case">
                                    <div>Incorrect Username or Password entered.</div>
                                    <div>Please enter the correct credentials.</div>
                                </div>
                            }
                        </form>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: isLoggedIn(state),
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
