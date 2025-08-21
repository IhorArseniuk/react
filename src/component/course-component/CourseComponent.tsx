import './course.css'
import type {CoursePropType} from "../../models/coursesDuration.ts";
import type {FC} from "react";
type CourseType={
    course: CoursePropType
}
export const CourseComponent:FC<CourseType> = ({course}) => {
    return (
        <div>
            <h2>{course.title}  {course.monthDuration}</h2>
        </div>
    );
};
export default CourseComponent;
