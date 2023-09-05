// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEllipsis, faFlag, faHeartCrack } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/tippy.css';
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    // const [isTippyVisible, setIsTippyVisible] = useState(false)
    return (

        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a13a343f85e50b6af1e1f80c95f0accf~c5_100x100.jpeg?x-expires=1694052000&x-signature=P0KmxLs4jM%2BfO6WsulSq729FG8A%3D" alt="/" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>dthue_312</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>by Đ.Huệ</span>
            </div>
            <Tippy
                arrow={true}
                theme={'light'}
                interactive={true}
                placement={'bottom-end'}
                className={cx('tippy-rounded')}
                content={
                    <div className={cx('threedots')} tabIndex="-1" >
                        <div className={cx('threedots-icon')}
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faFlag} />
                            <a href="/">Báo Cáo</a>
                        </div>
                        <span></span>
                        <div className={cx('threedots-icon')}                    >
                            <FontAwesomeIcon className={cx('icon')} icon={faHeartCrack} />
                            <a href="/">Đánh dấu là không phù hợp</a>
                        </div>
                    </div>
                }
            >
                <button className={cx('ellipsis')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </button>
            </Tippy>
        </div>
    );
}

export default AccountItem;