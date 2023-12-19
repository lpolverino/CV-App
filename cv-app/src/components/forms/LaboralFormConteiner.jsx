import React from 'react'
import JobForm from './JobForm'

const LaboralFormConteiner = ({jobs, updateJob, addJob,deleteJob}) => {
  return (
    <div>
    <div>
        {
            jobs.map(job => 
                <JobForm key={job.key} job ={job} changeHandler ={updateJob} ></JobForm>
            )
        }
    </div>
    <div>
        <button onClick={addJob()}> ADD </button>
    </div>
</div>
  )
}

export default LaboralFormConteiner