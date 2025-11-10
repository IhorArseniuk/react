import {JsonHomeComponent} from "../../components/json/JsonHomeComponent.tsx";
import {Outlet} from "react-router";

export const JsonHomePage = () => {
   return(
       <>
       <JsonHomeComponent/>
       <Outlet/>
       </>
)
};
