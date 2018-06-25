import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
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
                <a href="/home">
                    <img
                        className="company-logo"
                        src={companyLogo}
                    />
                </a>
                <div className="header-right">
                    <ul className="language-picker">
                        <li><a href="#" data-target="#" >EN</a></li>
                        <li><a href="#" data-target="#" >LT</a></li>
                        <li><a href="#" data-target="#" >RU</a></li>
                    </ul>

                    <div>
                        React Boilerplate
                    </div>
                    {this.props.isLoggedIn &&
                    <div className="sign-out" onClick={this.logout}>
                        Sign Out
                    </div>
                    }
                </div>
                {this.state.logoutNow && 
                    <div className="logout-container">
                        <div className="logout-container-title">Are you sure you want to logout?</div>
                        <button className="logout-container-button-1" onClick={this.closeLogout}>No</button>
                        <a href="/"><button onClick={this.props.logout} className="logout-container-button-2">Yes</button></a>
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

export default connect(mapStateToProps, { logout })(Header);
