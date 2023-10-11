    import { useState } from "react";

    function Card({ id, image, info, price, name , removeTour}) {
      const [readmore, setReadmore] = useState(false);
      const desscription = readmore ? info :`${info.substring(0, 200)}....`;
        
      function readmoreHandler() {
        setReadmore(!readmore);
      }
      
      return (
        <div className="card w-[400px] h-max m-4 p-4 flex flex-col rounded-lg items-center shadow-xl">
          <img src={image} className="w-[380px] aspect-square"></img>
          <div className="tour-info mx-[5px] my-[20px]">
          <div className="tour-details">
            <h4 className="tour-price text-green-600 text-[1.3rem] font-bold">${price}</h4>
            <h4 className="tour-name text-[1.5rem]">{name}</h4>
          </div>
          <div className="discription">
            {desscription}
            <span className="read-more text-blue-900" onClick={readmoreHandler}>
              {readmore ? `show less` : `read more`}
            </span>
          </div>
          </div>

          <button onClick={() => removeTour(id)} className="mt-[18px] py-[10px] px-[80px] border font-bold cursor-pointer border-red-800 rounded-xl text-[18px] bg-[#b4161b21]  hover:bg-red-800 hover:text-white transition-all duration-200">Not Intersted</button>
        </div>
      );
    }

    export default Card;
