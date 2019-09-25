import React from 'react';

const Button = ({ description, icon, className }) => {
    return (
        <button className={className}>{icon}{description}</button>
    )
}

export default Button;
