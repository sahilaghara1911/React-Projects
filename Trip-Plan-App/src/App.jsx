import { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

import "./App.css";

const App = () =>{
  const [tours, setTours] = useState(data);
  function removeTour(id){
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours)
  }

  if(tours.length ===0 ){
    return (
      <div className="refresh flex justify-center items-center flex-col h-[100vh]">
        <h2 className="font-bold text-lg">No Tours Left</h2>
        <button onClick={() => setTours(data)} className="border mt-[18px] py-[10px] px-[80px] bg-slate-500">
          Refresh
        </button>
      </div>
    )
  }
  return (
    <div className="min-h-[100vh]">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
