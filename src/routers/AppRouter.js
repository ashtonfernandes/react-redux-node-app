import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { IntlProvider, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import messages from './messages'
import ForgotPassword from '../components/forgotPassword/ForgotPassword';
import PageNotFound from '../components/pageNotFound/PageNotFound';

class AppRouter extends Component {
    render() {
        const { lang } = this.props
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div>
                    <main>
                        <Header />
                        <Switch>
                            <Route exact path="/" render={(props) => (
                                <Home {...props} />
                            )}/>
                            <Route path="/login" component={Login} />
                            <Route path="/reset" component={ForgotPassword} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </main>
                </div>
            </IntlProvider>
        )
    }
}

AppRouter.propTypes = {
    lang: PropTypes.string.isRequired
};


const mapStateToProps = (state, ownProps) => {
    console.log('state', state);
    return {
        ...ownProps,
        lang: state.localeReducer.lang
    }
};

export default connect(mapStateToProps, { })(AppRouter);