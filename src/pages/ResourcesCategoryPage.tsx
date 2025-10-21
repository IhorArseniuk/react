import {ResourcesMenuComponent} from "../components/menu-components/ResourcesMenuComponent.tsx";
import {Outlet} from "react-router";


export const ResourcesCategoryPage = () => {
    return (
        <>
        <ResourcesMenuComponent/>
            <Outlet/>
        </>
    );
};
