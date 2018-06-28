import React from 'react';
import PropTypes from 'prop-types';
import './inLineErrorMessage.css';

const InLineErrorMessage = ( error ) => {
    return (
        Object.keys(error).map((key, text) => {
            return <span className="in-line-error-message" key={key}>! {error.text}</span>
        })
    );
}

InLineErrorMessage.propTypes = {
    text: PropTypes.string.isRequired
};

export default InLineErrorMessage;
