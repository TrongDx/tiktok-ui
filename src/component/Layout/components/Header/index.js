import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon here
import styles from './Header.module.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';

import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
const cx = classNames.bind(styles)

const MENU_ITEM = [
    {
        icon: <img src={images.liveItem} alt="/live" />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
    },
    {
        icon: <img src={images.languagle} alt="/live" />,
        title: 'Tiếng việt',
    },
    {
        icon: <img src={images.feedback} alt="/live" />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback'
    },
    {
        icon: <img src={images.keyboard} alt="/live" />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <img src={images.lightDark} alt="/live" />,
        title: 'Chế độ tối',
    }
]
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
                    delay={[0, 700]}
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
                <Menu
                    items={MENU_ITEM}
                >
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </div>
    </header>
}

export default Header;