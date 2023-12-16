import React from 'react'
import "./Banner.scss"

function Banner(props) {
  return (
    <div className='banner'>
        <img src={props.imageUrl} alt=''/>
        <h2>Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Banner