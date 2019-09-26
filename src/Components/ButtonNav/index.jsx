import React from 'react';

const ButtonNav = ({ description, icon, className }) => {
    return (
        <button className={className}>{icon} {description}</button>
    )
}

export default ButtonNav;
