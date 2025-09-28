import {UsersPage} from "../pages/UsersPage.tsx";
import {PaginationComponent} from "../pagination/PaginationComponent.tsx";

export const MainLayout = () => {
    return (
        <div>
            <UsersPage/>
            <PaginationComponent/>
        </div>
    );
};
