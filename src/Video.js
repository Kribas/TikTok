import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
    const videoRef = useRef(null);
    const [play,setPlay] = useState(false);

    const onVideoPress = () => {
        if(play) {
            videoRef.current.pause();
            setPlay(false);
        }else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <video 
                className= "video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src="https://v16m.tiktokcdn.com/0b07dfcee048d61ebb9353dee5fd2733/61420078/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/d5ded85b46ea4e26ae67adcfae990057/?a=1233&amp;br=4232&amp;bt=2116&amp;cd=0%7C0%7C1&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=98ZmoeYO4kag3&amp;l=202109150817090102451412143B16F488&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=ajZkbTc6ZmR2NzMzZjczM0ApN2czOjhnZjtnNzxpMzo2O2dmaGZzcjRvYmJgLS1kMWNzc18zXzJiXjRfNDM2Yy0uYGE6Yw%3D%3D&amp;vl=&amp;vr="></video>
            <VideoFooter channel="kribasrimal" description="Check out this tiktok" song="Some random tiktok song title"/>
            <VideoSidebar/>
        </div>
    )
}

export default Video
