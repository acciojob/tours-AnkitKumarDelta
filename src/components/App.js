import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import data from '../tours.json';

const App = () => {
  const[tours, setTours] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    setTours(data);
    setLoading(false);
  },[]);

  function refreshTours(){
    setTours(data);
  }
  
  function handleTours(id){
    const new_tours = tours.filter(tour=>tour.id!==id);
    setTours(new_tours);
  }

  if(loading){
    return <Loading/>
  }

  if(tours.length==0){
    return(
      <main>
        <h2>No tours left</h2>
        <button onClick={refreshTours}>Refresh</button>
      </main>
    );
  }

    return(
      <main id="main">
        {tours.length==0 && <Loading/>}
        <Tours tours={tours} removeTours={handleTours}/>
      </main>
    )
}
export default App;
