import {type CoursePropType, coursesAndDurationArray} from "../../models/coursesDuration.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";
import './courses.css'
export const CoursesComponent = () => {
    return (
        <div className={'courses'}>
            {coursesAndDurationArray.map((course:CoursePropType,index:number)=>{
            return<CourseComponent course={course} key={index}/>
        })}
        </div>
    );
};
export default CoursesComponent;
