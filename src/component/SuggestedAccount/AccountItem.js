import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/component/Popper'
import styles from './SuggestedAccount.module.scss'
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles)
function AcountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return (
        <span>
            <Tippy
                // visible
                interactive
                delay={[800, 0]}
                offset={[-20, -10]}
                placement='bottom'
                render={renderPreview}
            >
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
            </Tippy>
        </span>
    );
}


AcountItem.prototype = {

}
export default AcountItem;