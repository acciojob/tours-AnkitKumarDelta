import React from 'react'

const Tour = ({tour, removeTour}) => {
  return (
    <div>
        <p>{tour.name}</p>
        <p>{tour.info}</p>
        <img src={tour.image}/>
        <p>{tour.price}</p>
    </div>
  )
}

export default Tour