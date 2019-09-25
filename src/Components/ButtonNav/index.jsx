import React from 'react';
import './styles.css';

const ButtonNav = ({ description, icon }) => {
    return (
        <button>{icon} {description}</button>
    )
}

export default ButtonNav;
