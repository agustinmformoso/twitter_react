import React from 'react';
import './styles.scss'

const Textarea = ({ type, name, className, placeholder, handleOnChange, rows }) => {


    return (
        <textarea  type={type} name={name} className={className} placeholder={placeholder} onChange={handleOnChange} />
    )
}

export default Textarea;
//rows="1" cols="70"
