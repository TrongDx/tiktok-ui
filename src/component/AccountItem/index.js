// import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEllipsis, faFlag, faHeartCrack } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import Image from '../Image';

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    // const [isTippyVisible, setIsTippyVisible] = useState(false)
    return (

        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('usename')}>{data.nickname}</span>
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
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
}
export default AccountItem;