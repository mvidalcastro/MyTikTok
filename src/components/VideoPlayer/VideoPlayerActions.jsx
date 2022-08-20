import { Heart } from "../Icons/Heart"
import Comment  from "../Icons/Comment"
import  Share  from "../Icons/Share"

import styles from './styles.module.css'


// videos: 1.43 min

export const VideoPlayerActions = ({ likes = 150, coments = 12, shared= 30, harted = false}) => {
    
    //Das un like
    const handleLike = () => {
        window.alert('like');
    }

    const handleComment = () => {
        window.alert ('Comment');
    }

    const handleShare = () => {
        window.alert('shared');
    }

  return (
        <aside className={styles.actions}>        
            
               <button 
                    className={styles.action}
                    onClick = {handleLike}
               > 
                    <Heart/>
                    <span title="like"> { likes } </span>    
              </button>                             

                <button 
                    className={styles.action}
                    onClick = {handleComment}
                    > 
                    <Comment/>
                    <span title="coments"> { coments } </span>
                </button>        
                        
                <button 
                    className={styles.action}
                    onClick = {handleShare}
                    >
                    <Share/>
                    <span title="shared"> { shared } </span>
                </button>        
            

        </aside>
        
  )
}
