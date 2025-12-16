import React, { useState } from 'react'

const Tour = ({tour, removeTour}) => {
    const[toggle, setToggle] = useState(true);
  return (
    <div>
        <p>{tour.name}</p>
        <p>{toggle ? tour.info.substring(0,200)+"..." : tour.info}</p>
        <button onClick={()=>setToggle(!toggle)}>
            {toggle==true ? "Show more" : "Show less"}
            </button>
        <img src={tour.image}/>
        <p>{tour.price}</p>
        <button onClick={()=>removeTour(tour.id)}>Remove</button>
    </div>
  )
}

export default Tour