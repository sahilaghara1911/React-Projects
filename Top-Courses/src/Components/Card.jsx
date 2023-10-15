import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";
function Card({course, likedCourses, setLikedcourses}) {
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //Pehle se like hua pada tha
            setLikedcourses( (prev) => prev.filter( (cid) => (cid !== course.id) ));
            toast.warning("Liked removed")
        } else {
            //pehle se like nahi hai
            //insert karna h ye course liked coures me
            if(likedCourses.length ===0){
                setLikedcourses([course.id]);
            } else{
                //non-empty pehle se
                setLikedcourses((prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully")
        }
    }
    return ( 
    <div className="w-[300px] bg-[#1f1f3f] rounded-md overflow-hidden ">
        <div className="relative ">
            <img src={course.image.url}></img>
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2  -bottom-2 grid place-items-center">
            <button onClick={clickHandler}>
                {
                    !likedCourses.includes(course.id) ? 
                    (<FcLikePlaceholder fontSize="1.75rem" />) :
                    (<FcLike fontSize="1.75rem"/>)
                }
                
            </button>
        </div>
        </div>
        
        <div className="p-4">
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className="text-white mt-2">
                {
                    course.description.length >100 ? 
                    (course.description.substr(0,100)) + "..." :
                    (course.description)
                }
            </p>
        </div>
    </div>);
}

export default Card;