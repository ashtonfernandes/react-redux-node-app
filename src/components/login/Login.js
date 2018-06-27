import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/loginActions'; 
import { isLoggedIn } from '../../reducers/loginReducer';
import './Login.css';
import InLineErrorMessage from '../inLineErrorMessage/InLineErrorMessage';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            loginError: false
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.username, this.state.password);
        this.setState({ 
            errors,
            loginError: false
        });

        if (Object.keys(errors).length === 0) {
            this.props.login(this.state.username, this.state.password).then((success) => {
                this.props.history.push("/home");
            }, (err) => {
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

        const { errors } = this.state;
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
                                <input
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    placeholder="username"
                                />
                                { errors && errors.username && <InLineErrorMessage text={errors.username} /> }
                            </div>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                    placeholder="password"
                                />
                                { errors && errors.password && <InLineErrorMessage text={errors.password} /> }
                            </div>
                            {this.state.loginError && 
                                <div className="login-error-case">
                                    <div>Incorrect Username or Password entered.</div>
                                </div>
                            }
                            <button className="login-button" type="submit">
                                Login
                            </button>
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
    // isLoggedIn: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        isLoggedIn: isLoggedIn(state),
    }
};

// const mapDispatchToProps = (dispatch) => ({
//     login: (username, password) => dispatch(login(username, password))
// });

export default connect(mapStateToProps, { login })(Login);
