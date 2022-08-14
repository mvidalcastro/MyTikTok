import { useRef, useState } from "react"
import styles from "./styles.VideoPlayer.module.css"


const SRC= "https://v16-webapp.tiktok.com/9615e1545fbefd0cc87f0fe22093c082/62f8b383/video/tos/useast2a/tos-useast2a-ve-0068c004/80b804cda14b48bd8b9a2ef9c7f9b258/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=582&bt=291&cs=0&ds=3&ft=gKSYZ88Uo0PD1wFlbsg9wuYE75LiaQ2D~fK&mime_type=video_mp4&qs=0&rc=ODw0ZTlpPDg5M2c2aWc0ZkBpM2llZjc6ZmRvZDMzNzczM0BhMC00LWExNjUxMmAxYzY1YSNzYmxicjRncjJgLS1kMTZzcw%3D%3D&l=202208140231270101920611701CA7FD40&btag=80000"
export const VideoPlayer = () => {
  
    const [playing, setPlaying] = useState(false)
    const video = useRef()

    const handlePlay = () =>{
        if (playing) {
            video.current.pause();
        }
        else {
            video.current.play();
        }
        
        setPlaying(!playing);
    
    }

    return (
    <div>
        <video 
            className={styles.video} 
            src={SRC} 
            controls={false}
            ref = { video }
        />
        <button className={styles.player} onClick = { handlePlay }>

        </button>
    </div>
  )
}
