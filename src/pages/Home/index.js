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
            setVideos(querySnapshot.docs.map(doc => doc.data()))
        })
    }, []);
    return (
        <div
            id={cx('focus')}
            tabIndex={"1"}
            className={cx('wrapper')}>
            {videos.map(video => <Video key={'1'} data={video} />)}
        </div>
    )
}

export default Home;