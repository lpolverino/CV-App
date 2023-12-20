import React from 'react'
import PersonalForm from './PersonalForm'
import UniversityFormConteiner from './UniversityFormConteiner'
import LaboralFormConteiner from './LaboralFormConteiner'
import "../../styles/forms.css"

const Forms = ({
    personInfo, academicInfo, laboralInfo, updatePersonHandler,
     updateAcademicHandler, addUniversity, deleteUniversity,
        updateLaboralHandler, addJob, deleteJob}) => {
  return (
    <div className='forms'>
      <PersonalForm 
        person={personInfo}
        updatePersonHandler = {updatePersonHandler}
      ></PersonalForm>
      <UniversityFormConteiner 
        universities={academicInfo}
        updateUniversity = {updateAcademicHandler}
        addUniversity={addUniversity}
        deleteUniversity = {deleteUniversity}>
      </UniversityFormConteiner>
      <LaboralFormConteiner
        jobs = {laboralInfo} 
        updateJob = {updateLaboralHandler}
        addJob = {addJob}
        deleteJob = {deleteJob}>

      </LaboralFormConteiner>
    </div>
  )
}

export default Forms