import {simpsons} from "../../models/simsons.ts";
import {CharacterComponent} from "../component-Character/CharacterComponent.tsx";
import './family.css'
export const FamilyComponent = () => {
    return (
        <div>
            {simpsons.map((simpson,index)=>{
                return <CharacterComponent simpson={simpson} key={index} children={<p>{simpson.info}</p>}/>
            })}
        </div>
    );
};
