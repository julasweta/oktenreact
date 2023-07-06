import React from 'react'

function Post({id, title, handlePost}) {
  return (
    <div className='post'>
      <h2>{ title }</h2>
      <span>id : { id }</span>
      <button onClick={()=> handlePost(id)}> детальніше...</button>
    </div>
  )
}

export default Post
