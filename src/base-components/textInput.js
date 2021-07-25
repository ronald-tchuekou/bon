import React from 'react'

export const TextInput = props => {
    const {label, type} = props
    return (
        <div className='text_input__wrapper'>
            <label htmlFor={label}>{label}</label>
            <input type={type} id={label} />
        </div>
    )
}
