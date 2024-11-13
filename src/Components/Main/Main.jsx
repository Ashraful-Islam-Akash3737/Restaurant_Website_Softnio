import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <div className="sticky top-0 z-10 bg-[red]">
                <NavBar></NavBar>
            </div>
            <div className="-z-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;