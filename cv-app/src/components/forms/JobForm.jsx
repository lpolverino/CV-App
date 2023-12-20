import React from 'react'
import GeneralForm from './GeneralForm'

const JobForm = ({job, updateJob, deleteHandler}) => {

    const jobsFormsInputs = [
        {
			key:"title",
			label:"title",
			input:job.title,
			handler: (newTitle) =>{
                const newJob = {...job, title:newTitle}
                updateJob(job.key, newJob)
			}
		},
        {
			key:"company",
			label:"Company",
			input:job.company,
			handler: (newCompany) =>{
                const newJob = {...job, company:newCompany}
                updateJob(job.key, newJob)
			}
		},
    ]
  return (
    <div>
      <h3>{job.company}</h3>
    <GeneralForm camps={jobsFormsInputs}>
    </GeneralForm>
    <button onClick={() => deleteHandler(job.key)}>Delete</button>
</div>
  )
}

export default JobForm