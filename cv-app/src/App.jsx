import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
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

  const updateLaboral = (index, newJob) =>{
    const filterJob = (job, id) =>{
      return job.key===id? newJob:job
   }
   const newLaboral= laboral.map(job => filterJob(job,index))
   setLaboral(newLaboral)
  }

  const addArray = (newElement, array, setHandler) => {
    const key = uuidv4();
    newElement.key = key
    const newArray = array.push(newElement)
    setHandler(newArray)
  }

  const addUniversity = (newUniversity) =>{
    addArray(newUniversity, academic, setAcademic)
  }


  const addLaboral = (newJob) =>{
    addArray(newJob, laboral, setLaboral)
  }

  const deleteArray = (array, setHandler, id) =>{
    const newArray = array.filter(element => element.key !== id)
    setHandler(newArray)
  }
  
  const deleteUniversity = (id)  =>{
    deleteArray(academic, setAcademic, id)
  }

  const deleteLaboral = (id)  =>{
    deleteArray(laboral, setLaboral, id)
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
