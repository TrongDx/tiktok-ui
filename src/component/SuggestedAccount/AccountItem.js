import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/component/Popper'
import styles from './SuggestedAccount.module.scss'
import AccountPreview from './AccountPreview';
import Image from '../Image/Image';

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
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a13a343f85e50b6af1e1f80c95f0accf~c5_100x100.jpeg?x-expires=1695214800&x-signature=Ujejcxy88Ukn%2Bpy1JkRdcRddYFU%3D"
                        alt="/"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>dthue_312</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>by Đ.Huệ</p>
                    </div>
                </div>
            </Tippy>
        </span>
    );
}


AcountItem.prototype = {

}
export default AcountItem;