import React from 'react'
import { AlbumDisk } from './AlbumDisk'
import styles from "./styles.module.css"

export const VideoDescription = ({author, description, albumImagen} ) => {
  return (
    <footer className= {styles.description}>
        <div className={styles.textWrapper}>
        <section>
            <strong  > 
            <a className={styles.author} href={`/user/${author}`}>
                  @{author}
                </a>
            </strong>
            <p className={ styles.text}> { description } </p>
        </section>
        </div>
        <div>
            <AlbumDisk albumImagen={ albumImagen }/>
        </div>
    </footer>
  )
}
