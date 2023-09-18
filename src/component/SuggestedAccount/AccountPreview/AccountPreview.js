import classNames from "classnames/bind"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss'
import Button from "~/component/Button";
import Image from '~/component/Image/Image';

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a13a343f85e50b6af1e1f80c95f0accf~c5_100x100.jpeg?x-expires=1695214800&x-signature=Ujejcxy88Ukn%2Bpy1JkRdcRddYFU%3D" alt="" />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>dthue_312</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>by Đ.Huệ</p>
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