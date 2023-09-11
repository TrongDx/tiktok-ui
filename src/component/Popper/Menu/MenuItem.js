import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return <button className={classes} to={data.to} onClick={onClick}>
        <span className={cx('icon')}>{data.icon}</span>
        <span className={cx('title')}>{data.title}</span>
    </button >
}


MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}
export default MenuItem;