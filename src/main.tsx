
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {router} from "./roters/Routers.tsx";

createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
