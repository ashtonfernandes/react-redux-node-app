import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Header from '../components/header/Header';
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import PageNotFound from '../components/pageNotFound/PageNotFound';


class AppRouter extends Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Login} exact={true}/>
                        <Route path="/home" component={Home}  />
                        <Route component={PageNotFound} />
                    </Switch>
                </BrowserRouter>  
            </div>
        )
    }
}

export default hot(module)(AppRouter);