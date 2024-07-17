import React from 'react'
import Kawasaki from './Kawasaki'
import Xedaqua from './Xedaqua'
import Phutung from './Phutung'
import './style.css'

const Topinfo = () => {
  return (
    <div className='top'>
        <Kawasaki/>
        <Xedaqua/>
        <Phutung/>
    </div>
  )
}

export default Topinfo