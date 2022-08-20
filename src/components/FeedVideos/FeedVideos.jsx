import React from 'react'
import { VideoPlayer } from '../VideoPlayer/VideoPlayer'
import  styles from './styles.FeedVideos.module.css'



const VIDEOS = [
    {
        
        id : 1,
        author: 'Kimovitzh'  ,  
        description: 'What women want to 2.0 🥹',
        likes: 123,
        shared: 234,
        comments: 61,
        songTitle: 'Pirinoli- Vientos del Norte',
        albumImagen: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b5403ff87596d8fdb0fe568c5bccee45~c5_100x100.jpeg?x-expires=1661108400&x-signature=TdJbf5GF%2BEyDmIE1BkMUMWOb1sw%3D',
        src : 'https://v16-webapp.tiktok.com/d91118ca2c037fa4461f349873be2e62/63009972/video/tos/useast2a/tos-useast2a-ve-0068c002/5cc8553fdb694994963df2e20a219e55/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1370&bt=685&cs=0&ds=3&ft=gKSYZ88Uo0PD1KVSRyg9wuCE75LiaQ2D~wK&mime_type=video_mp4&qs=0&rc=PGY3Nmc3MzU1NjM2aDNoaEBpM2VkbTM6ZnNrZTMzNzczM0BhMDMzMi4wNV4xNjEzXjZjYSMubWA1cjRnYDJgLS1kMTZzcw%3D%3D&l=20220820021912010217029082056D0500&btag=80000'
    },
    {
        id : 2,
        author: 'pipe.ruiz',
        description: 'Hombre de mar',
        likes: 51,
        shared: 12,
        comments: 214,
        songTitle: 'sonido original- Patricio',
        albumImagen: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b5403ff87596d8fdb0fe568c5bccee45~c5_100x100.jpeg?x-expires=1661108400&x-signature=TdJbf5GF%2BEyDmIE1BkMUMWOb1sw%3D',
        src : 'https://v16-webapp.tiktok.com/925c46f8440e62a50c80e9d364f788ec/63009938/video/tos/useast2a/tos-useast2a-ve-0068c004/037d4d2eaa1049b89dcb342f1438c106/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1720&bt=860&cs=0&ds=3&ft=gKSYZ88Uo0PD1KVSRyg9wuCE75LiaQ2D~wK&mime_type=video_mp4&qs=0&rc=NGlpMzM4MzQ6N2g0MzRlaUBpM3AzeGQ6Zmc2ZTMzNzczM0AzMi5hYjRgX14xYi00NDBhYSNpNC0tcjRnYnFgLS1kMTZzcw%3D%3D&l=20220820021912010217029082056D0500&btag=80000'
    }
]
export default function FeedVideos() {
  return ( 
              VIDEOS.map( video => {
                return  <div key = {video.id} className= { styles.items }>
                            <VideoPlayer   { ... video} />                            
                        </div>
              })
            
      
  )
}
