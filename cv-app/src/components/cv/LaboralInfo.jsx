import React from 'react'
import Job from './Job'

const LaboralInfo = ({jobs}) => {
  return (
    <div>LaboralInfo
    {
        jobs.map( job => 
        <Job key={job.title + job.company} job={job}></Job>
        )
    }
    </div>
  )
}

export default LaboralInfo