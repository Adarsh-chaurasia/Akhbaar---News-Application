import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import mypic from './mypic.png';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const About = () => {
    return <div className='container d-flex m-4 text-center'>
        <div className="name m-4 p-4 text-center">
            hello, I'm
           <h1> Adarsh Chaurasia</h1>
            Frontend & DApp Dev
        </div>
        <div className="image-thumbnail m-4">
        <img src={mypic} className='m-4 ' alt="" /></div>
    </div>;
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;
// #endregion

export default About;