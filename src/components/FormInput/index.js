import React from 'react'

import './input.css'

const formInput = ({ handleChange, label, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps}/>
            {
                label ? (
                    <label className={`form-input-label`}>
                       {label}
                    </label>
                ) : null
            }
        </div>
    )
}

export default formInput
