import React from 'react';
import './styles.scss'

const Textarea = ({ type, name, className, placeholder, handleOnChange }) => {
    return (
            <textarea type={type} name={name} className={className} placeholder={placeholder} onChange={handleOnChange} rows="1" cols="70"/>
    )
}

export default Textarea;
