
import { createRoot } from 'react-dom/client'
import './index.css'
import {routers} from "./router/Routs.tsx";
import {RouterProvider} from "react-router-dom";

createRoot(document.getElementById('root')!).render(<RouterProvider router={routers}/>)
