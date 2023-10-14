import Card from "./Card";
function Cards({courses}) {
    function getCourses() {
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    getCourses()
    
    return (  
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map( (course) => {
                return <Card key={course.id} course={course}/>
            })
        }
    </div>
    );
}

export default Cards;