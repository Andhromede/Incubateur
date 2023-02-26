import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const BaseView = () => {

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default BaseView;
