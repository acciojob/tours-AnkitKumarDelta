import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTours}) => {
  return (
    <div>
        {tours.map(tour=>(
            <Tour tour={tour} key={tour.id} removeTour={removeTours}/>
        ))}
    </div>
  )
}

export default Tours