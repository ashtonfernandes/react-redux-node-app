import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { isLoggedIn } from '../../reducers/loginReducer';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

Home.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    // isLoggedIn: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        isLoggedIn: isLoggedIn(state),
    }
};

export default connect(mapStateToProps, {})(Home);
