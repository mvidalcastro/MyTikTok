import React from 'react'
import styles from './styles.module.css'

export const AlbumDisk = ( { albumImagen } ) => {
  return (
    <div className= {styles.album}>
        <img className={styles.albumImage} src= { albumImagen } ></img>
    </div>
    
  )
}
