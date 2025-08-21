import type {SimpsonType} from "../../models/simsons.ts";
import type {FC, ReactNode} from "react";
import './character.css'
export type CharacterType={
    simpson:SimpsonType
    children:ReactNode
}
export const CharacterComponent:FC<CharacterType> = ({simpson , children}) => {
    return (
           <div className={'simpson'}>
               <h3>{simpson.name}</h3>
               <h4>{simpson.surname}</h4>
               <p>{simpson.age}</p>
               {children}
               <img src={simpson.photo} alt={simpson.info}/>
           </div>
    );
};
