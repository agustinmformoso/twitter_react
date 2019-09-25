import React from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button';

const ButtonNav = ({ description, icon }) => {
    return (
        <Button variant="light" size="lg">{icon} {description}</Button>
    )
}

export default ButtonNav;
