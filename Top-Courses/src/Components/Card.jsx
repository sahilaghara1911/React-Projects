import {FcLike} from "react-icons/fc"
function Card({course}) {
    return ( 
    <div>
        <div>
            <img src={course.image.url}></img>
        </div>
        <div>
            <button>
                <FcLike/>
            </button>
        </div>
        <div>
            
        </div>
    </div>);
}

export default Card;