import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './VideoContent.module.scss'

const cx = classNames.bind(styles)

function VideoContent({ video, like, comment, share, save }) {
    const videoRef = useRef()
    const [playing, setPlaying] = useState(false)
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
        <div className={cx('wrapper')}>
            <video
                ref={videoRef}
                onClick={handleVideo}
                className={cx('video')} src={require('../../../../assets/videos/' + video)}
                loop
            // autoPlay
            />
            <div className={cx('action')}>
                <div className={cx('btn-action')}>
                    <span className={cx('cover-icon')}><FontAwesomeIcon className={cx('icon')} icon={faHeart} /></span>
                    <strong className={cx('count-action')}>{like}</strong>
                </div>
                <div className={cx('btn-action')}>
                    <span className={cx('cover-icon')}><FontAwesomeIcon className={cx('icon')} icon={faComment} /></span>
                    <strong className={cx('count-action')}>{comment}</strong>
                </div>
                <div className={cx('btn-action')}>
                    <span className={cx('cover-icon')}><FontAwesomeIcon className={cx('icon')} icon={faBookmark} /></span>
                    <strong className={cx('count-action')}>{save}</strong>
                </div>
                <div className={cx('btn-action')}>
                    <span className={cx('cover-icon')}><FontAwesomeIcon className={cx('icon')} icon={faShare} /></span>
                    <strong className={cx('count-action')}>{share}</strong>
                </div>
            </div>
        </div>

    );
}

VideoContent.propTypes = {
    video: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    comment: PropTypes.number.isRequired,
    share: PropTypes.number.isRequired,
    save: PropTypes.number.isRequired,
}
export default VideoContent;


