import React from 'react'

const SingleSide = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div>
      <div className='divider'></div>
      <a href={item.url} target='_blank' rel='noreferrer'>
      <div className='section'>
        <h5>{item.source.name}</h5>
        <p>{item.title} by {item.author}</p>
      </div>
      </a>
    </div>
  )
}

export default SingleSide;
