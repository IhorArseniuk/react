import {UsersPage} from "../pages/UsersPage.tsx";
import {PaginationComponent} from "../components/PaginationComponent.tsx";

export const MainLayout = () => {
    return (
        <>
        <UsersPage/>
            <PaginationComponent/>
        </>
    );
};
