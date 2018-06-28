import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { IntlProvider, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import translations from './translations'
import ForgotPassword from '../components/forgotPassword/ForgotPassword';
import PageNotFound from '../components/pageNotFound/PageNotFound';

class AppRouter extends Component {
    render() {
        const { lang } = this.props
        return (
            <IntlProvider locale={lang} messages={translations[lang]}>
                <div>
                    <main>
                        <Header />
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/" render={(props) => (
                                    <Home {...props} />
                                )}/>
                                <Route path="/login" component={Login} />
                                <Route path="/reset" component={ForgotPassword} />
                                <Route component={PageNotFound} />
                            </Switch>
                        </BrowserRouter>
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
    return {
        ...ownProps,
        lang: state.localeReducer.lang
    }
};

export default connect(mapStateToProps, { })(AppRouter);