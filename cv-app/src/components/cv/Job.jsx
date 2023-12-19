import React from 'react'

const Job = ({job}) => {
  return (
    <div>Job
        <p>{job.title}</p>
        <p>{job.company}</p>
        <ul>
            {
                job.roles.map(role => <li key={role}>{role}</li>)
            }
        </ul>
        <p>{job.startDate.getDate() + "/" + job.startDate.getMonth() +"/" + job.startDate.getFullYear()}</p>
    </div>
  )
}

export default Job