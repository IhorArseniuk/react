import {ResourcesMenuComponent} from "../components/menu-components/ResourcesMenuComponent.tsx";
import {Outlet} from "react-router";


export const ResourcesCategoryPage = () => {
    return (
        <div className={'flex flex-col gap-3'}>
        <ResourcesMenuComponent/>
            <Outlet/>
        </div>
    );
};
