import React, { useState } from "react"
import Cv from "./components/cv/Cv"
import Forms from "./components/forms/Forms"

import {personMockUp, universityMockUp, laboralMockUp} from "./mockup"

function App() {

  const [person, setPerson] = useState(personMockUp)

  const [academic, setAcademic] = useState(universityMockUp)

  const [laboral, setLaboral] = useState(laboralMockUp)

  const updatePerson = (newPerson) =>{
    setPerson(newPerson)
  }

  const updateAcademic = (index, newUniversity) =>{
    const filterUniversity = (university, id) =>{
       return university.key===id? newUniversity:university
    }
    const newAcademic = academic.map(university => filterUniversity(university,index))
    setAcademic(newAcademic)
  }

  const addUniversity = () =>{

  }

  const deleteUniversity = ()  =>{

  }

  const updateLaboral = (index, newJob) =>{
    const filterJob = (job, id) =>{
      return job.key===id? newJob:job
   }
   const newLaboral= laboral.map(job => filterJob(job,index))
   setLaboral(newLaboral)
  }

  const addLaboral = () =>{

  }

  const deleteLaboral = ()  =>{

  }


  return (
    <>
      <Forms
        personInfo={person}
        academicInfo = {academic}
        laboralInfo = {laboral}
        updatePersonHandler = {updatePerson}
        updateAcademicHandler = {updateAcademic}
        addUniversity={addUniversity}
        deleteUniversity = {deleteUniversity}
        updateLaboralHandler = {updateLaboral}
        addJob={addLaboral}
        deleteJob={deleteLaboral}
        >
      </Forms>
      <Cv
        personInfo={person}
        academicInfo = {academic}
        laboralInfo = {laboral}>
      </Cv>
    </>
  )
}

export default App
