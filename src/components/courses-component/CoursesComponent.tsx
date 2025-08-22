import {coursesArray} from "../../data/coursesArray.ts";
import {CourseComponent} from "../cours-component/CourseComponent.tsx";
import './coursesComponent.css'
export function CoursesComponent() {
    return (
        <div className="coursesDiv">
            {coursesArray.map((course,index)=>{
           return (<CourseComponent course={course} key={index}>
                <ul>
                    {course.modules.map((module,index)=>{
                        return <li className='border-2 bg-amber-600 hover:scale-150' key={index}>{module}</li>
                    })}
                </ul>
            </CourseComponent>)
            }
            )}
        </div>
    );
}
