import { Outlet } from "react-router-dom";
import Nav from "../Shered/Nav";
import Footer from "../Shered/Footer";


const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;