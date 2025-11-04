import {Outlet} from "react-router";
import {CategoryComponent} from "../components/CategoryComponent.tsx";

export const MainLayout = () => {
    return (
        <>
            <CategoryComponent/>
        <Outlet/>
        </>
    );
};
