import React from 'react'

const PersonIfo = ({person}) => {
    return (
    <div className='personal-info'>PersonIfo
        <p>{person.name}</p>
        <p>{person.address}</p>
        <p>{person.email}</p>
        <p>{person.phone}</p>
    </div>
  )
}

export default PersonIfo