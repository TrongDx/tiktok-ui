import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon here
import styles from './Header.module.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Image';
import { ArrowDownloadIcon, CoinIcon, FavouriteIcon, FeedbackIcon, InboxIcon, KeyboardIcon, LanguagleIcon, LightDarkIcon, LiveIcon, LogoIcon, LogoutIcon, MessageIcon, ProfileIcon, SettingIcon } from '~/component/Icons';
import Search from '../Search';
import routesConfig from '~/config/routes'
const cx = classNames.bind(styles)

const MENU_ITEM = [
    {
        icon: <LiveIcon />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
    },
    {
        icon: <LanguagleIcon />,
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
        icon: <FeedbackIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <LightDarkIcon />,
        title: 'Chế độ tối',
    }
]
function Header() {


    const handleMenuChange = (menuItem) => {
        // console.log(menuItem);
    }

    const currentUser = true

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'Xem hồ sơ',
            to: '/@trongdx023',
        },
        {
            icon: <FavouriteIcon />,
            title: 'Yêu thích',
            to: '/@trongdx023',
        },
        {
            icon: <CoinIcon />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEM,
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: '/',
            separate: true
        },
    ]
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <LogoIcon />
                </Link>
            </div>
            {/*Search*/}
            <Search />

            <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <Button upload onClick={() => { alert('Clicked!') }}>
                            <FontAwesomeIcon icon={faPlus} /><span>&nbsp;&nbsp;&nbsp;</span>Tải lên
                        </Button>
                        <div> {/*Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. */}
                            <Tippy
                                delay={[0, 700]}
                                arrow={true}
                                theme={'light'}
                                interactive={true}
                                hideOnClick={false}
                                placement={'bottom'}
                                content={
                                    <div className={cx('desktop')} tabIndex="-1" >
                                        <img className={cx('img-desktop')} src={images.desktop} alt="/" />
                                        <p>Ứng dụng Tiktok cho máy tính</p>
                                        <Button download>Tải về</Button>
                                        <p>Thay vào đó, tải ứng dụng di động về
                                            <ArrowDownloadIcon />
                                        </p>
                                    </div>
                                }
                            >
                                <button className={cx('iconDesktop')} >
                                    <img src={images.iconDesktop} alt="/Desktop" />
                                </button>
                            </Tippy>
                        </div>
                        <Tippy
                            content={'Tin nhắn'}
                            placement={'bottom'}
                            delay={200}
                        >
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy
                            content={'Hộp thư'}
                            placement={'bottom'}
                            delay={200}
                        >
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button upload onClick={() => { alert('Clicked!') }}>
                            <FontAwesomeIcon icon={faPlus} /><span>&nbsp;&nbsp;&nbsp;</span>Tải lên
                        </Button>
                        <Button primary onClick={() => { alert('Clicked!') }}>
                            Đăng nhập
                        </Button>
                        <div> {/*Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. */}
                            <Tippy
                                delay={[0, 700]}
                                arrow={true}
                                theme={'light'}
                                interactive={true}
                                appendTo={() => document.body}
                                hideOnClick={false}
                                placement={'bottom'}
                                content={
                                    <div className={cx('desktop')} tabIndex="-1" >
                                        <img className={cx('img-desktop')} src={images.desktop} alt="/" />
                                        <p>Ứng dụng Tiktok cho máy tính</p>
                                        <Button download>Tải về</Button>
                                        <p>Thay vào đó, tải ứng dụng di động về
                                            <ArrowDownloadIcon />
                                        </p>
                                    </div>
                                }
                            >
                                <button className={cx('iconDesktop')}>
                                    <img src={images.iconDesktop} alt="/Desktop" />
                                </button>
                            </Tippy>
                        </div>
                    </>
                )}
                <Menu
                    items={currentUser ? userMenu : MENU_ITEM}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/082eb15b42a5ce1128c6e6437b0659da~c5_720x720.jpeg?x-expires=1694073600&x-signature=E2LKm%2F2%2BZuiSGgO4%2BnwVERCfAis%3D"
                            alt="Đinh Xuân Trọng"
                            fallback='https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/74242747_2441083699499683_9211280282282360832_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=6bnjSlhLbTYAX8ulToq&_nc_ht=scontent.fhan14-1.fna&oh=00_AfB0p7AEJGVKcUMgjayTtKJIjddROvxtSl0G8Mz3C6oa1Q&oe=651FCBEE'
                        />
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