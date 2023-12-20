import React from 'react'
import { FormInput } from './FormInput'
import "../../styles/general-form.css"

const GeneralForm = ({camps}) => {
  return (
    <div className='form'>
        {camps.map(camp =>
             <FormInput key={camp.key} label={camp.label} input={camp.input} onChange={camp.handler}></FormInput> )
        }
    </div>
  )
}

export default GeneralForm