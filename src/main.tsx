
import { createRoot } from 'react-dom/client'
import './index.css'

import {Routers} from "./routers/Routers.tsx";
import {RouterProvider} from "react-router";

createRoot(document.getElementById('root')!).render(<RouterProvider router={Routers}/>)
