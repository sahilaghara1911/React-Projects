function Filter({filterData}) {
    return ( 
        <div className="flex mx-auto justify-center flex-wrap w-11/12 max-w-max gap-y-4 py-4 space-x-4">
            {filterData.map((data) =>{
                return(
                    <button className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-200" key={data.id}>{data.title}</button>
                )
                
            })}
        </div>
     );
}

export default Filter;