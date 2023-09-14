import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import Menu, { MenuItem } from './Menu'
import { HomeIcon, UserGroupIcon, DiscoveryIcon, LiveIcon, HomeActiveIcon, DiscoveryActiveIcon, LiveActiveIcon, UserGroupActiveIcon } from '~/component/Icons'
import config from '~/config';

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem title="Đang Follow" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
            <MenuItem title="Khám Phá" to={config.routes.discovery} icon={<DiscoveryIcon />} activeIcon={<DiscoveryActiveIcon />} />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
        </Menu>
    </aside>
}

export default Sidebar;