import { useEffect, useState } from "react"
import { apiUrl, filterData } from "./data"
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";

function App() {

  useEffect( () => {
    const fetchData = async() => {
      try{
        
      }
    }
  })
  return (
    <div>
      <Navbar />

      <Filter 
      filterData={filterData}

      />

      
    </div>
  )
}

export default App
