import React from 'react'
import University from './University'

const UniversityInfo = ({universities}) => {
    return (
    <div className='universities-info'>Academics
    {
        universities.map( university => 
        <University key={university.name + university.title} university={university}></University>
        )
    }
    </div>
  )
}

export default UniversityInfo