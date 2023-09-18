import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './DivLink.module.scss'

const cx = classNames.bind(styles)

function DivLink({ href, title }) {
    return (
        <a className={cx('title')} href={href}>{title}</a>
    );
}

DivLink.propTypes = {
    href: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
}
export default DivLink;