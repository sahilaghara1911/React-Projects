import {FcLike} from "react-icons/fc"
function Card({course}) {
    return ( 
    <div className="w-[300px] bg-[#1f1f3f] rounded-md overflow-hidden ">
        <div className="relative ">
            <img src={course.image.url}></img>
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2  bottom-3 grid place-items-center">
            <button>
                <FcLike fontSize="1.75rem"/>
            </button>
        </div>
        </div>
        
        <div className="p-4">
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className="text-white mt-2">{course.description}</p>
        </div>
    </div>);
}

export default Card;