import classNames from "classnames/bind";

import styles from './VideoInfo.module.scss'
import Image from "~/component/Image";
// import { MusicIcon } from "~/component/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)
function VideoInfo({ avatar, nickname, fullname, music, content }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={avatar} alt='' />
            <div className={cx('container')}>
                <div>
                    <a href="https://www.tiktok.com/@mazuong2ka">
                        <h3 className={cx('nickName')}>{nickname}</h3>
                        <h4 className={cx('name')}>{fullname}</h4>
                    </a>
                </div>
                <div className={cx('text-tus')}>
                    <span>{content}</span>
                </div>
                <div className={cx('action-music')}>
                    <FontAwesomeIcon className={cx('icon-music')} icon={faMusic} />
                    <span className={cx(('text-music'))}>{music}</span>
                </div>
            </div>
            <div>
                <button className={cx('follow-btn')}>Follow</button>
            </div>

        </div>
    );
}

export default VideoInfo;