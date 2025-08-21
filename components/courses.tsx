import type {FC} from "react";

type CoursePropType={cours:string};


const CoursesArray:FC<CoursePropType> = ({cours})=>{
    return(
        <div>
            <h2>{cours}</h2>
        </div>
    );
}

export default CoursesArray;
