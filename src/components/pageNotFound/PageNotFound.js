import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './PageNotFound.css';
import Header from "../header/Header";

class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true,
            isLogin: false
        };

    }

    render() {
        return (
            <div className="home-container">
                <Header
                    isLogin={this.state.isLogin}
                    isHome={this.state.isHome}
                    isDashboard={this.state.isDashboard}
                    action={this.props.action}
                />
                <div className="home-header">
                    <div>Page Not Found</div>
                    <br />
                    <Link to="/">Go Home!</Link>
                </div>
            </div>
        );
    }
}

export default PageNotFound;
