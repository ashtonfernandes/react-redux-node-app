import React, { Component } from 'react';
import './Login.css';
import Home from '../home/Home';
import Header from '../header/Header';
import { login } from '../../actions/loginActions'; 
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        // if (localStorage.getItem('login') === null) {
        //     localStorage.setItem('login', false);
        // }
        // let login = JSON.parse(localStorage.getItem('login'));

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
        // login(this.state.username, this.state.password).then(x => {
        //     if (x.login) {
        //         localStorage.setItem('login', true);
        //         this.setState({
        //             isLogin: true
        //         });
        //     } else {
        //         this.setState({
        //             errorPresent: true
        //         });
        //         // console.log(x.error);
        //     }
        // });
    };

    handleSignOut = () => {
        // localStorage.setItem('login', false);
        this.setState({ isLogin: false, username: '', password: '' });
        // console.log(
        //     'when logout-',
        //     localStorage.getItem('login') +
        //         ' state: ' +
        //         JSON.stringify(this.state)
        // );
    };

    render() {
        return (
            <div className="">
                <div className="login-form">
                    {/* <div className="header-container">
                        <Header />
                    </div> */}
                    {/* <div className="card-element"> */}


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
                            <button className="login-button" primary type="submit">
                                Login
                            </button>
                            {this.state.errorPresent && 
                                <div className="login-error-case">
                                    <div>Incorrect Username or Password entered.</div>
                                    <div>Please enter the correct credentials.</div>
                                </div>
                            }
                        </form>

                        {/* <form onSubmit={this.handleSubmit}>
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
                            <button className="login-button" primary type="submit">
                                Login
                            </button>
                            {this.state.errorPresent ? (
                                <div className="login-error-case">
                                    <div>Incorrect Username or Password entered.</div>
                                    <div>Please enter the correct credentials.</div>
                                </div>
                            ) : null}
                        </form> */}
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('state', state);
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
