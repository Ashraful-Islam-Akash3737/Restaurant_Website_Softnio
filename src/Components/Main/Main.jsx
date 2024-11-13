import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Main = () => {
    return (
        <div className="container mx-auto ">
            <div className="sticky top-0">
            <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;