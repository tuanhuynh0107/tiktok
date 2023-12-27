import classNames from "classnames/bind";
import styles from "./Defaultlayout.module.scss";
import Header from "~/components/Layout/components/Header";
import Slidebar from "./Slidebar";
import Footer from "./Footer";

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')} >
                <Slidebar/>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;