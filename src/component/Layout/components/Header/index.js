import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon here
import styles from './Header.module.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
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
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
            ],
        },
    },
    {
        icon: <img src={images.feedback} alt="/live" />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
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

    const handleMenuChange = (menuItem) => {
        // console.log(menuItem);
    }

    const currentUser = true

    const userMenu = [
        {
            icon: <img src={images.profile} alt="/live" />,
            title: 'Xem hồ sơ',
            to: '/@trongdx023',
        },
        {
            icon: <img src={images.favourite} alt="/live" />,
            title: 'Yêu thích',
            to: '/@trongdx023',
        },
        {
            icon: <img src={images.coin} alt="/live" />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <img src={images.setting} alt="/live" />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEM,
        {
            icon: <img src={images.logout} alt="/live" />,
            title: 'Đăng xuất',
            to: '/',
            separate: true
        },
    ]
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
                {currentUser ? (
                    <>
                        <Button upload onClick={() => { alert('Clicked!') }}>
                            <FontAwesomeIcon icon={faPlus} />Tải lên
                        </Button>
                        <Tippy
                            delay={[0, 700]}
                            arrow={true}
                            theme={'light'}
                            interactive={true}
                            placement={'bottom'}
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
                            <button className={cx('iconDesktop')} >
                                <img src={images.iconDesktop} alt="/Desktop" />
                            </button>
                        </Tippy>
                        <Tippy
                            content={'Tin nhắn'}
                            placement={'bottom'}
                            delay={200}
                        >
                            <button className={cx('action-btn')}>
                                <img className={cx('action-img-message')} src={images.message} alt="/message" />
                            </button>
                        </Tippy>
                        <Tippy
                            content={'Hộp thư'}
                            placement={'bottom'}
                            delay={200}
                        >
                            <button className={cx('action-btn')}>
                                <img className={cx('action-img-inbox')} src={images.inbox} alt="/inbox" />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
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
                            placement={'bottom'}
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
                    </>
                )}
                <Menu
                    items={currentUser ? userMenu : MENU_ITEM}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <img className={cx('user-avatar')}
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/082eb15b42a5ce1128c6e6437b0659da~c5_720x720.jpeg?x-expires=1694073600&x-signature=E2LKm%2F2%2BZuiSGgO4%2BnwVERCfAis%3D"
                            alt="Đinh Xuân Trọng" />
                    ) : (

                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>
            </div>
        </div >
    </header >
}

export default Header;