import type {CourseType} from "../../models/coursType.ts";
import {  type ReactNode} from "react";
import './courseComponent.css'
export type CourseProps={
    course:CourseType,
    children:ReactNode
}
 export function CourseComponent({course,children}:CourseProps) {
    return (
        <div className={'courseDiv'}>
              <h2 className='text-emerald-200 text-3xl' >{course.title}</h2>
              <p className='border-4 border-amber-950 text-2xl'>{course.monthDuration}</p>
              <p className='bg-amber-800 border-2 text-xl' >{course.hourDuration}</p>
               {children}
        </div>
    );
}

