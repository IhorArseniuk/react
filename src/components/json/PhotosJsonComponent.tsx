import {useFetch} from "../../hooks/UseFetch.tsx";
import type {PhotoJsonType} from "../../models/json-models/PhotosJsonType.ts";
import {PhotoComponent} from "./PhotoComponent.tsx";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";
import {useContext} from "react";

export const PhotosJsonComponent = () => {
  const photos = useFetch<PhotoJsonType[]>('photos','json')
const {setTheme}=useContext(ThemeContext)
    return (
        <>
            {photos && photos.map(photo => <PhotoComponent photo={photo}/>)}
            <button onClick={()=>setTheme('black')}>Dark mode</button>
            <button onClick={()=>setTheme('ling')}>Light mode</button>
        </>
    );
};
