import Header from "~/components/Layout/components/Header";
import Slidebar from "./Slidebar";
import Footer from "./Footer";

function DefaultLayout({children}) {
    return (
        <div>
            <Header/>
            <div className="container">
                <Slidebar/>
                <div className="content">{children}</div>
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;