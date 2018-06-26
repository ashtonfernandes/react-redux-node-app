import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../actions/loginActions';
import { isLoggedIn } from '../../reducers/loginReducer';
import './Header.css';

const companyLogo = require('../../assets/icons/logo.png');

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
                        alt="logo"
                        className="company-logo"
                        src={companyLogo}
                    />
                </a>
                <div className="header-right">
                    {/* <ul className="language-picker">
                        <li><a href="#" data-target="#" >EN</a></li>
                        <li><a href="#" data-target="#" >FR</a></li>
                    </ul> */}

                    {this.props.isLoggedIn ?
                    <div className="sign-out" role="button" onClick={this.logout} onKeyDown={this.logout}>
                        Sign Out
                    </div>
                    :
                    <div>
                        React Boilerplate
                    </div>
                    }
                </div>
                {this.state.logoutNow && 
                    <div className="logout-container">
                        <div className="logout-container-title">Are you sure you want to logout?</div>
                        <div>
                            <button type="submit" className="logout-container-button" onClick={this.closeLogout}>No</button>
                            <a href="/"><button type="submit" onClick={this.props.logout} className="logout-container-button">Yes</button></a>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: isLoggedIn(state),
    }
};

export default connect(mapStateToProps, { logout })(Header);
