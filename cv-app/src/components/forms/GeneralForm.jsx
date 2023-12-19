import React from 'react'
import { FormInput } from './FormInput'

const GeneralForm = ({camps}) => {
  return (
    <div>GeneralForm
        {camps.map(camp =>
             <FormInput key={camp.key} label={camp.label} input={camp.input} onChange={camp.handler}></FormInput> )
        }
    </div>
  )
}

export default GeneralForm