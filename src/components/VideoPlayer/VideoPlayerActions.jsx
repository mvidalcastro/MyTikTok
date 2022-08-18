import { Heart } from "../Icons/Heart"

import styles from './styles.module.css'


// videos: 1.06 min

export const VideoPlayerActions = () => {
  return (
        <aside className={styles.actions}>        
            <div className={styles.action} >
                <Heart/>
            </div>
            <div className={styles.action} >
                <Heart/>
            </div>
            <div className={styles.action}>
                <Heart/>
            </div>

        </aside>
        
  )
}
