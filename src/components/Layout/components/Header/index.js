
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import { useState,useEffect } from "react";

import { Wrapper as PopperWrapper  } from "~/components/Popper";


import classNames from "classnames/bind";
import styles from './Header.module.scss';
import images from "~/assets/images";
import AccountsItem from "~/components/AccountItem";
 
const cx = classNames.bind(styles);
function Header() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setSearchResult([])
    }, [])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            
                <img src={images.logo.default} alt="logo"/>
          
            <Tippy
                interactive
                visible= {searchResult.length >0}
                render={attrs => (
                
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>

                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>

                            <AccountsItem/>
                            <AccountsItem/>
                            <AccountsItem/>
                        </PopperWrapper>
                    </div>
                
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Seach accounts and Video" spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')}/>
                    
                        
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                </div>
            </Tippy>

            <div className={cx('actions')}></div>
        </div>

    </header>;
}

export default Header;