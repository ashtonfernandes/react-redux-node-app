import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { login } from '../../actions/loginActions'; 
import { isLoggedIn } from '../../reducers/loginReducer';
import InLineErrorMessage from '../inLineErrorMessage/InLineErrorMessage';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            rememberMe: false,
            loginError: false
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleCheckbox = (e) => {
        this.setState({
            rememberMe: !this.state.rememberMe
        });
    };

    handleSubmit = (e) => {
        const { username, password } = this.state;
        e.preventDefault();
        const errors = this.validate(username, password);
        this.setState({ 
            errors,
            loginError: false
        });

        if (Object.keys(errors).length === 0) {
            this.props.login(username, password).then(() => {
                this.props.history.push("/");
            }, () => {
                this.setState({
                    loginError: true
                });
            })
        }
    };

    validate = (username, password) => {
        const errors = {};
        // if (!Validator.isEmail(username)) errors.username = "Username incorrect";
        if (!username) errors.username = "Username field empty";
        if (!password) errors.password = "Password field empty";
        return errors;
    }

    render() {

        const { username, password, errors, loginError, rememberMe } = this.state;
        return (
            <div>
                {this.props.isLoggedIn ?
                    <div>
                        <div>User is already logged In</div>
                        <a href="/">Go Home</a>
                    </div>
                    :
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={this.handleChange}
                                    placeholder="username"
                                />
                                { errors && errors.username && <InLineErrorMessage text={errors.username} /> }
                            </div>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    type="password"
                                    placeholder="password"
                                />
                                { errors && errors.password && <InLineErrorMessage text={errors.password} /> }
                            </div>

                            <div className="remember-me">
                                <input type="checkbox" checked={rememberMe} onChange={this.handleCheckbox} id="remember-me" name="check" />
                                <label htmlFor="remember-me">
                                    <span>
                                        Remember Me
                                    </span>
                                </label>
                            </div>

                            { loginError && 
                                <div className="login-error-case">
                                    <div>Incorrect Username or Password entered.</div>
                                </div>
                            }
                            <div className="login-button-container">
                                <button className="login-button" type="submit">
                                    <FormattedMessage id="login.login" defaultMessage="Login"/>
                                </button>
                                <Link to="/reset"><FormattedMessage id="login.forgot_password" defaultMessage="Forgot password?"/></Link>
                            </div>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    isLoggedIn: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    isLoggedIn: isLoggedIn(state),
});

// const mapDispatchToProps = (dispatch) => ({
//     login: (username, password) => dispatch(login(username, password))
// });

export default connect(mapStateToProps, { login })(Login);
