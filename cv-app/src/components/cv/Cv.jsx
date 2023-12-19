import React from 'react'
import PersonIfo from './PersonIfo'
import UniversityInfo from './UniversityInfo'
import LaboralInfo from './LaboralInfo'

const Cv = ({personInfo, academicInfo, laboralInfo }) => {
  return (
    <div className='section-cv'>Cv
        <PersonIfo person={personInfo}></PersonIfo>
        <UniversityInfo universities={academicInfo}></UniversityInfo>
        <LaboralInfo jobs={laboralInfo}> </LaboralInfo>
    </div>
  )
}

export default Cv