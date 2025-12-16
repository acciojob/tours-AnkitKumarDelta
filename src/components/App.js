import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const App = () => {
  const[tours, setTours] = useState([]);
  useEffect(()=>{
    fetch('https://course-api.com/react-tours-project')
    .then(res=>res.json())
    .then(res=>setTours(res));
  },[]);

  function handleTours(id){
    const new_tours = tours.filter(tour=>tour.id!==id);
    setTours(new_tours);
  }
    return(
      <main id="main">
        {tours==[] && <Loading/>}
        <Tours tours={tours} removeTours={handleTours}/>
      </main>
    )
}
export default App;
