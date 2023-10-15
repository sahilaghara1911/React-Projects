import { useState } from "react";
import Card from "./Card";
function Cards({courses, category}) {
    const [likedCourses , setLikedcourses] = useState([])
    function getCourses() {
        if(category === 'All'){
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else {
            return courses[category];
        }
        
    }
    getCourses()
    
    return (  
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map( (course) => {
                return <Card key={course.id} 
                course={course} 
                likedCourses={likedCourses} 
                setLikedcourses={setLikedcourses}/>
            })
        }
    </div>
    );
}

export default Cards;