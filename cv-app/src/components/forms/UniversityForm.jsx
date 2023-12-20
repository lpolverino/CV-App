import React from 'react'
import GeneralForm from './GeneralForm'

const UniversityForm = ({university, changeHandler, deleteHandler}) => {

    const universityFormsIputs = [
		{
			key:"name",
			label:"Name",
			input:university.name,
			handler: (newName) =>{
                const newUniversity = {...university, name:newName}
                changeHandler(university.key, newUniversity)
			}
		},
		{
			key:"title",
			label:"Title",
			input:university.title,
			handler: (newTitle) =>{
                const newUniversity = {...university, title:newTitle}
                changeHandler(university.key, newUniversity)
			}
		},
	]
  return (
    <div>
		<h3>{university.title}</h3>
        <GeneralForm camps={universityFormsIputs}>
        </GeneralForm>
		<button onClick={() => deleteHandler(university.key)}> Delete</button>
    </div>
  )
}

export default UniversityForm