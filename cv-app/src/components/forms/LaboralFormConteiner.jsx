import React from 'react'
import JobForm from './JobForm'

const LaboralFormConteiner = ({jobs, updateJob, addJob,deleteJob}) => {
    console.log(jobs);
  return (
    <div>
    <div>
        {
            jobs.map(job => 
                <JobForm key={job.key} job ={job} changeHandler ={updateJob} deleteHandler={deleteJob} ></JobForm>
            )
        }
    </div>
    <div>
        <button onClick={() => addJob({title:"",company:"", startDate:new Date(), roles:[]})}> ADD </button>
    </div>
</div>
  )
}

export default LaboralFormConteiner