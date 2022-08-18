import React from 'react'
import { VideoPlayer } from '../VideoPlayer/VideoPlayer'
import  styles from './styles.FeedVideos.module.css'

// TUTORIAL VIDEO : 54:42 MIN
const VIDEOS = [
    {
        id : 1,
        author: 'Kimovitzh'  ,  
        descripction: 'What women want to 2.0 🥹',
        likes: 123,
        shared: 234,
        comments: 61,
        songTitle: 'Pirinoli- Vientos del Norte',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/195e2fbb81cce61d4870f4118b137604~c5_100x100.jpeg?x-expires=1660878000&x-signature=hMZnGA%2Fx0JYeH6BLYIWGM6IEw84%3D',
        src : 'https://v16-webapp.tiktok.com/7e4b5c1768006baff3b67a7119dc44b4/62fdb4de/video/tos/useast2a/tos-useast2a-ve-0068c004/5cefdbfb84f24ae7a2c4690c242c883f/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2004&bt=1002&cs=0&ds=3&ft=eXd.6HHvMyq8Z~vbOwe2NCDlol7Gb&mime_type=video_mp4&qs=0&rc=PDlnZDc1ZDM0OjM0OGY4ZEBpanEzdGk6Zjk4ZTMzNzczM0BeYC8yLTNgXmAxNDUwL2M0YSNrbGUwcjQwc2hgLS1kMTZzcw%3D%3D&l=202208172139470102230180730E590B05&btag=80000'
    },
    {
        id : 2,
        author: 'pipe.ruiz',
        descripction: 'Hombre de mar',
        likes: 51,
        shared: 12,
        comments: 214,
        songTitle: 'sonido original- Patricio',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/195e2fbb81cce61d4870f4118b137604~c5_100x100.jpeg?x-expires=1660878000&x-signature=hMZnGA%2Fx0JYeH6BLYIWGM6IEw84%3D',
        src : 'https://v16-webapp.tiktok.com/cc5e1cc72f4e419a3cfb5c0666fb840c/62fdb5f4/video/tos/useast2a/tos-useast2a-ve-0068c001/07d0f188e55f41fa984e5ac496f3fd47/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=832&bt=416&cs=0&ds=3&ft=eXd.6HHvMyq8ZdmbOwe2NUc0yl7Gb&mime_type=video_mp4&qs=0&rc=NTRlZ2Y4MzUzNjo6Nmk7N0BpajtsNjU6ZjVqZTMzNzczM0AzMGA0XmNfXy4xNmMxMDAwYSNeNGhjcjRnYmpgLS1kMTZzcw%3D%3D&l=202208172141240102170260400958CB76&btag=80000'
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
