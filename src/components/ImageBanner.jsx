import React from 'react'


function ImageBanner(props) {
  return (
    <div className='image__banner' >
     <img src={props.imageUrl} alt=''/>
    </div>
  )
}

export default ImageBanner