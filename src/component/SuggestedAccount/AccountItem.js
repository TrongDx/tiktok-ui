import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccount.module.scss'

const cx = classNames.bind(styles)
function AcountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c444b88141868fddf3adc5070dec8c68~c5_100x100.jpeg?x-expires=1694926800&x-signature=YJ%2F5iT5G7Z2mBScjMQPhLhg3j0Q%3D"
                alt="/"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>zitbe04_10</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Yến Trần</p>
            </div>
        </div>
    );
}


AcountItem.prototype = {

}
export default AcountItem;