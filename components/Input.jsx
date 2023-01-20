import React from 'react'

const Input = ({ name, placeholder, type }) => {
    return (
        <input className='form-input border-none rounded-md invert-[1]' type={type} placeholder={placeholder} name={name} />
    )
}

export default Input;