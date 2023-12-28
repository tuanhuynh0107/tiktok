import classNames from "classnames/bind";
import styles from './AccountsItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img className= {cx('avatar')} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuNsMKKXyT91lpGlVc4uFQNUM2A-CvTVOgSBy61moUhMtsljreGnvjdfwQEv_40n0A5EoX2ZPXtznmKGV9DjC6i6cfwZmv_e2yRGtJM1LQ9eIpGPaZnkTaAQqcGNwEDngZzeymNpELSYfPO4EF4k_nSWVRhvGR2ATWiw7BWkxjgF3b8nFLJxUQmbfWBwPA/s1600/anh-sex-dem-khuya-thanh-vang-rat-thich-hop-de-dit-nhau%20%28102%29.jpg" alt=""/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Huỳnh Võ Hoàng Tuấn</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
                </p>
                <span className={cx('username')}>ht24430</span>
            </div>
        </div>
    );
}

export default AccountsItem;