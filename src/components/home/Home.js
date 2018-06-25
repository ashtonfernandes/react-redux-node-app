import React, { Component } from 'react';
import './Home.css';
import Header from "../header/Header";
import { connect } from 'react-redux';
import { isLoggedIn } from '../../reducers/login';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true,
            isLogin: false
        };
        if (!this.props.isLoggedIn) {
            this.props.history.push("/");
        }
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

const mapStateToProps = (state) => {
    return {
        isLoggedIn: isLoggedIn(state),
    }
};

export default connect(mapStateToProps, {})(Home);
