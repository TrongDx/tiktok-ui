import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a13a343f85e50b6af1e1f80c95f0accf~c5_100x100.jpeg?x-expires=1693494000&x-signature=cpKwbMbdkU5mhiqpuestHKQ%2FLbI%3D" alt="/" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dinh Thi Hue</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>dthue_312</span>
            </div>
        </div>
    );
}

export default AccountItem;