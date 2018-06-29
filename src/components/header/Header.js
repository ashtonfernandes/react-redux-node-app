import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { logout } from '../../actions/loginActions';
import { setLocale } from '../../actions/localeActions';
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
        const { logoutNow } = this.state;
        return (
            <div className="header-container">
                <a href="/">
                    <img
                        alt="logo"
                        className="company-logo"
                        src={companyLogo}
                    />
                </a>
                <div className="header-right">
                    <div className="language-picker">
                        <div role="button" onKeyDown={() => this.props.setLocale('en')} onClick={() => this.props.setLocale('en')}>EN</div>
                        <div role="button" onKeyDown={() => this.props.setLocale('fr')} onClick={() => this.props.setLocale('fr')}>FR</div>
                    </div>

                    {this.props.isLoggedIn ?
                        <div className="sign-out" role="button" onClick={this.logout} onKeyDown={this.logout}>
                            <FormattedMessage id="header.sign_out" defaultMessage="Sign Out"/>
                        </div>
                        :
                        <div>
                            <FormattedMessage id="header.name" defaultMessage="React Boilerplate"/>
                        </div>
                    }
                </div>
                {logoutNow && 
                    <div className="logout-container">
                        <div className="logout-container-title"><FormattedMessage id="header.confirmation" defaultMessage="Are you sure you want to logout?"/></div>
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
    isLoggedIn: PropTypes.func.isRequired,
    setLocale: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    isLoggedIn: isLoggedIn(state)
});

export default connect(mapStateToProps, { logout, setLocale })(Header);
