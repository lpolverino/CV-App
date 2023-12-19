import React from 'react'
import GeneralForm from './GeneralForm'



const PersonalForm = ({person, updatePersonHandler}) => {


	const personalFormsIputs = [
		{
			key:"name",
			label:"Name",
			input:person.name,
			handler: (newName) =>{
				const newPerson = { ...person, name:newName}
				updatePersonHandler(newPerson)
			}
		},
		{
			key:"email",
			label:"Email",
			input:person.email,
			handler: (newEmail) =>{
				const newPerson = { ...person, email:newEmail}
				updatePersonHandler(newPerson)
			}
		},
		{
			key:"address",
			label:"Address",
			input:person.address,
			handler: (newAddress) =>{
				const newPerson = { ...person, address:newAddress}
				updatePersonHandler(newPerson)
			}
		},
		{
			key:"phone",
			label:"Phone",
			input:person.phone,
			handler: (newPhone) =>{
				const newPerson = { ...person, phone:newPhone}
				updatePersonHandler(newPerson)
			}
		}
	]


  return (
    <div>PersonalForm
			<GeneralForm camps={personalFormsIputs}></GeneralForm>
    </div>
  )
}

export default PersonalForm