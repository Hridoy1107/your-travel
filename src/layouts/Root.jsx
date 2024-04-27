import { Outlet } from "react-router-dom";
import Header from "../mains/Header";
import Footer from "../mains/Footer";

const Root = () => {
    return (
        <>
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </>
    );
};

export default Root;