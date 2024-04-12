import { Outlet } from "react-router-dom";
import NavBar from "../Global/NavBar/NavBar";
import Footer from "../Global/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;