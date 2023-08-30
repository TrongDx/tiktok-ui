import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon here
import styles from './Header.module.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';

import Button from '~/component/Button';
const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0)
    }, [])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <a href="/">
                    <img src={images.logo} alt="Tiktok" />
                </a>
            </div>
            <Tippy
                interactive={true}
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Tài khoản
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input type="text" placeholder='Tìm kiếm' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('action')}>
                <Button upload onClick={() => { alert('Clicked!') }}>
                    <FontAwesomeIcon icon={faPlus} />Tải lên
                </Button>
                <Button primary onClick={() => { alert('Clicked!') }}>
                    Đăng nhập
                </Button>
                <Tippy
                    arrow={true}
                    theme={'light'}
                    interactive={true}
                    placement={'bottom-end'}
                    content={
                        <div className={cx('desktop')} tabIndex="-1" >
                            <img className={cx('img-desktop')} src={images.desktop} alt="/" />
                            <p>Ứng dụng Tiktok cho máy tính</p>
                            <Button download>Tải về</Button>
                            <p>Thay vào đó, tải ứng dụng di động về
                                <img src={images.arrowDownload} alt="/" />
                            </p>
                        </div>
                    }
                >
                    <button className={cx('iconDesktop')}>
                        <img src={images.iconDesktop} alt="/Desktop" />
                    </button>
                </Tippy>
            </div>
        </div>
    </header>
}

export default Header;