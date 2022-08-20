import React from 'react'

const  Share =  ( { fill = 'currentColor' }) => {
  return (
    <svg
      width='45'
      height='56'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 48 48'
    >
       <path
          fill={ fill }
          fillRule='evenodd'
          d='M25.8 10.3c0-1.3 1.5-2 2.4-1l14 13.3a2.9 2.9 0 01-.1 4.2L28 39c-.8.9-2.3.2-2.3-1v-5.5s-15-2.7-19.7 6c-.5.9-2.2 1.2-1.9-3C5.7 28 8.8 16.3 25.8 16.3v-5.9z'
          clipRule='evenodd'
        />
    
    </svg>
  )
}

export default Share;