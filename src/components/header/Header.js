import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const profileIcon = require('../../assets/icons/profile-icon-black.png');
const companyLogo = require('../../assets/icons/logo.png');
import { connect } from 'react-redux';
import { logout } from '../../actions/loginActions';
import { isLoggedIn } from '../../reducers/login';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    logout = () => {
        this.setState({
            logoutNow: true
        });
    }

    closeLogout = () => {
        this.setState({
            logoutNow: false
        });
    }

    render() {
        return (
            <div className="header-container">
                <div className="header-left">
                    <div className="company-logo-container">
                        <a href="/">
                            <img
                                className="company-logo"
                                src={companyLogo}
                            />
                        </a>
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-text-small">
                        React Boilerplate
                    </div>
                    {this.props.isLoggedIn &&
                        <div>
                            <img
                                className="logout-icon"
                                src={profileIcon}
                                onClick={this.logout}
                            />
                        </div>
                    }
                </div>
                {this.state.logoutNow ? (
                    <div className="logout-container">
                        <div className="logout-container-title">Are you sure you want to logout?</div>
                        <button className="logout-container-button-1" onClick={this.closeLogout}>No</button>
                        <button className="logout-container-button-2" onClick={this.props.logout}>Yes</button>
                    </div>
                ) : null }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('states', state);
    return {
        isLoggedIn: isLoggedIn(state),
    }
};

export default connect(mapStateToProps, { logout })(Header);
