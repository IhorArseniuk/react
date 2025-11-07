import {DummyHomeComponent} from "../../components/dummy/DummyHomeComponent.tsx";
import {Outlet} from "react-router";

export const DummyHomePage = () => {
    return (
        <>
        <DummyHomeComponent/>
            <Outlet/>
        </>
    );
};
