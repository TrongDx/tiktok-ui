// import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from "react";

import { Wrapper as PopperWrapper } from '~/component/Popper'
import styles from './SuggestedAccount.module.scss'
import AccountPreview from './AccountPreview';
import Image from '../Image/Image';
import { db } from '~/component/firebase/firebase'

const cx = classNames.bind(styles)
function AcountItem() {
    // const renderPreview = (props) => {
    //     return (
    //         <div tabIndex='-1' {...props}>
    //             <PopperWrapper>
    //                 <AccountPreview />
    //             </PopperWrapper>
    //         </div>
    //     )
    // }

    const [videos, setVideos] = useState([])
    useEffect(() => {
        db.collection("videos").get().then((querySnapshot) => {
            // setVideos(querySnapshot.docs.map(doc => doc.data()))
            const videoData = querySnapshot.docs.map((doc) => {
                return {
                    id: doc.id, // Sử dụng ID tự động của Firestore làm giá trị "key"
                    ...doc.data(), // Lấy dữ liệu của tài liệu
                };
            });
            setVideos(videoData);
        })
    }, []);
    return (
        // {
        videos.map((video) => (
            <span key={video.id}>
                <Tippy
                    // visible
                    interactive
                    delay={[800, 0]}
                    offset={[-20, -10]}
                    placement='bottom'
                    render={(props) => (
                        <div tabIndex='-1' {...props}>
                            <PopperWrapper >
                                <AccountPreview data={video} />
                            </PopperWrapper>
                        </div>
                    )}
                >

                    <div className={cx('account-item')}>
                        <Image
                            className={cx('avatar')}
                            src={video.avatar}
                            alt="/"
                        />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>{video.nickname}</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('name')}>{video.fullname}</p>
                        </div>
                    </div>

                </Tippy>

            </span>
        ))
        // }
    );
}


AcountItem.prototype = {

}
export default AcountItem;