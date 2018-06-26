import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../actions/loginActions'; 
import { isLoggedIn } from '../../reducers/loginReducer';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
                                <input
                                    id="username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    placeholder="username"
                                />
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
                            </div>
                            {this.state.errorPresent && 
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
    login: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        isLoggedIn: isLoggedIn(state),
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(login(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
