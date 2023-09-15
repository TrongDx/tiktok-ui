import classNames from "classnames/bind"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss'
import Button from "~/component/Button";

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c444b88141868fddf3adc5070dec8c68~c5_100x100.jpeg?x-expires=1694926800&x-signature=YJ%2F5iT5G7Z2mBScjMQPhLhg3j0Q%3D" alt="" />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>zitbe04_10</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Yến Trần</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follow</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </ div >
    );
}

export default AccountPreview;