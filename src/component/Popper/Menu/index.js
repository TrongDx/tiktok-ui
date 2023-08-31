import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/component/Popper'
import MenuItem from './MenuItem';

const cx = classNames.bind(styles)
function Menu({ children, items = [] }) {

    const renderItem = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy className={cx('tippy-more-btn')}
            delay={[0, 700]}
            arrow={true}
            theme={'light'}
            interactive={true}
            placement={'bottom-end'}
            content={
                <div className={cx('menu-list')} tabIndex="-1" >
                    <PopperWrapper>
                        {renderItem()}
                    </PopperWrapper>
                </div>
            }
        >
            {children}
        </Tippy>
    );
}

export default Menu;