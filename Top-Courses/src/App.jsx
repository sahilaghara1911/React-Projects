import { useEffect, useState } from "react"
import { apiUrl, filterData } from "./data"
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";


    function App() {
      const [courses, setCourses] = useState(null);
      const [loading, setLoading] = useState(true);

      async function fetchData(){
        setLoading(true);
        try{
          let res = await fetch(apiUrl);
          let output = await res.json()
          // Output->
          setCourses(output.data)
        } catch(e){
          toast.error('Kis line pe hai app')
        }
        setLoading(false)
      }

      useEffect( ()=>{
        fetchData();
      },[])
      return (
          <div className="min-h-screen flex flex-col">
            <div>
              <Navbar />
              </div>
              <div className="bg-[#2a2a56]">
              <div>
                <Filter 
                filterData={filterData}
                />
                </div>
                <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center flex-wrap min-h-[50vh] ">
                {
                  loading ? (<Spinner />) : (<Cards courses={courses}/>)
                }
              
              </div>
              </div>
          </div>
      )
    }

  export default App
