
import './App.css'
import {coursesTitleArray} from "../components/coursesArray.ts";
import CoursesArray from "../components/courses.tsx";

function App() {

  return (
    <>
        { coursesTitleArray.map((course,index ) => (
            <CoursesArray  key={index} cours={course}/>
        ))}
    </>
  )
}

export default App
