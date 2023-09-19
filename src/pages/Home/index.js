import classNames from "classnames/bind";
import styles from './Home.module.scss'
import Video from "./Video";
import { useEffect, useState } from "react";
import { db } from '~/component/firebase/firebase'
// import firebase from './firebase-config';

const cx = classNames.bind(styles)

function Home() {
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
        <div
            id={cx('focus')}
            tabIndex={"1"}
            className={cx('wrapper')}>
            {videos.map((video) => <Video key={video.id} data={video} />)}
        </div>
    )
}

export default Home;