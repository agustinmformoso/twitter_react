import React from 'react';
import './styles.scss'

const Textarea = ({ type, name, className, placeholder }) => {
    return (
            <textarea type={type} name={name} className={className} placeholder={placeholder} rows="1" cols="70"/>
    )
}

export default Textarea;
