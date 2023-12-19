import React from 'react'

const University = ({university}) => {
  return (
    <div>University
        <p>{university.name}</p>
        <p>{university.title}</p>
        <p>{university.date.getDate() + "/" + university.date.getMonth() +"/" + university.date.getFullYear()}</p>
    </div>
    
    )
}

export default University