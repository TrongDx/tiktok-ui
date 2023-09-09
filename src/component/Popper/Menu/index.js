import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/component/Popper'
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles)

const defaultFn = () => { }
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                }
                else {
                    onChange(item)
                }
            }} />
        });
    };

    return (
        <Tippy
            className={cx('tippy-more-btn')}
            delay={[0, 700]}
            offset={[16, 8]}
            arrow={true}
            theme={'light'}
            hideOnClick={hideOnClick}
            interactive={true}
            placement={'bottom-end'}
            content={
                <div className={cx('menu-list')} tabIndex="-1" >
                    <PopperWrapper>
                        {history.length > 1 && <Header title='Ngôn ngữ' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            }
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;