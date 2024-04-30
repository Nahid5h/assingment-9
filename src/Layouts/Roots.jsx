import { Outlet } from "react-router-dom";
import Navber from "./Navber/Navber";


const Roots = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-4 mt-4"><Navber ></Navber></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;