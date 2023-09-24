import classNames from "classnames/bind"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss'
import Button from "~/component/Button";
import Image from '~/component/Image/Image';

const cx = classNames.bind(styles)

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt="" />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>{data.fullname}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.follow} </strong>
                    <span className={cx('label')}>Follow</span>
                    <strong className={cx('value')}>{data.like}</strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </ div >
    );
}

export default AccountPreview;