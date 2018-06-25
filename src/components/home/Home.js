import React, { Component } from 'react';
import './Home.css';
import Header from "../header/Header";

class Home extends Component {
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
                <div className="home-header">
                    Welcome to your React app
                </div>
            </div>
        );
    }
}

export default Home;
