import React from 'react'
import UniversityForm from './UniversityForm'

const UniversityFormConteiner = ({universities, updateUniversity, addUniversity, deleteUniversity}) => {
  return (
    <div>
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