import React from 'react'
import Quote from '../Quote/Quote'

const Bookmarks = ({ bookmarks }) => {
  
  return (
    <div className='bookmark-container'>
      {
        bookmarks.map((bookmark) => (
          
            <Quote key={bookmark.id} quote={bookmark} />
        ))
      }
    </div>
  )
}

export default Bookmarks;