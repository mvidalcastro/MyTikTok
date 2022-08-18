import clsx from "clsx"
import { useRef, useState } from "react"
import styles from "./styles.module.css"
import { VideoPlayerActions } from "./VideoPlayerActions"


//const SRC= "https://v16-webapp.tiktok.com/274eec04d0657249a9f523cec258090e/62fcb0c7/video/tos/useast2a/tos-useast2a-ve-0068c004/924329e635ad42e2a5bc298762550030/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=934&bt=467&cs=0&ds=3&ft=eXd.6HHvMyq8Z6WCOwe2Nd6Col7Gb&mime_type=video_mp4&qs=0&rc=NjpnZDg1O2U8PDw8Zjs6PEBpMzl2dDc6ZjY8ZTMzNzczM0AvYTE1YS0uXy4xMi4uMGMzYSMtMmZxcjRfaWNgLS1kMTZzcw%3D%3D&l=202208170310080101920520210D583D51&btag=80000"
export const VideoPlayer = ( { src }) => {
  
    const [playing, setPlaying] = useState(false)
    const video = useRef(null)

    const handlePlay = () =>{
        const {current: videoEl} = video;
        
        playing
            ?videoEl.pause()
            :videoEl.play();  
             //onClick = { handlePlay }
        setPlaying(!playing);
    }
    const playerClassName = clsx(styles.player, {
        [styles.hidden]: playing
    })
    return (
    <div className={ styles.wrapper}>
        <video 
            className={styles.video} 
            src={ src } 
            loop
            controls={false}
            ref = { video }
            onClick = { handlePlay }
        />
        
        <div 
            className={ playerClassName } 
            onClick = { handlePlay }            
            >        
        </div>
        < VideoPlayerActions />
    </div>
  )
}
