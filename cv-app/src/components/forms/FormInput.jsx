import React from 'react'
import "../../styles/form-input.css"

export const FormInput = ({label, input, onChange}) => {
  return (

    <div className="form-input">
        <label htmlFor={"person" + label}>{label}</label>
        <input
            id={"person"+label}
            type="text"
            value={input}
            onChange={(event) => onChange(event.target.value)}
        />
    </div>
  )
}
