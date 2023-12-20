import React from 'react'
import UniversityForm from './UniversityForm'
import "../../styles/form-section.css"

const UniversityFormConteiner = ({universities, updateUniversity, addUniversity, deleteUniversity}) => {
  return (
    <div className='form-section'>
        <h2>Academic Info</h2>
        <div>
            {
                universities.map(university => 
                    <UniversityForm key={university.key} university={university} changeHandler ={updateUniversity} deleteHandler={deleteUniversity}></UniversityForm>
                )
            }
        </div>
        <div>
            <button onClick={() => addUniversity({name:"",title:"",date:new Date()})}> ADD </button>
        </div>
    </div>
  )
}

export default UniversityFormConteiner