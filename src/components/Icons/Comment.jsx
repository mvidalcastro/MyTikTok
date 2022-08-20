import React from 'react'

const  Comment = ( { fill = 'currentColor' }) => {
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
          d='M38.5 35.3C42.6 31.2 45 27 45 22c0-10-9.3-18.3-20.7-18.3C12.9 3.7 3.6 11.9 3.6 22c0 10.2 9.6 17.1 21 17.1v3.4c0 1 1.1 1.7 2 1.2 3-1.6 8.4-4.8 11.9-8.3zM14.2 19.5a3 3 0 013 2.9 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm13 2.9a3 3 0 00-2.9-3 3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3zm7.2-3a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3z'
          clipRule='evenodd'
        />
     
    </svg>
  )
}

export default Comment;