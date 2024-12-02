import { Outlet } from "react-router-dom";
import Header from "../Header";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main>
            <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default MainLayout;