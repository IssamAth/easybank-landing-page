import React from 'react'
import './firstSec.css'
import MOCKUP from '../../images/image-mockups.png'

const FirstSec = () => {
  return (
    <div className='firstSec container relative overflow-hidden bg-articlebg'>
        {/* MOCKUP */}
        <div id='clip' className=' -mt-24'>
            <img src={MOCKUP} className=' h-60v' alt="" />
        </div>
    </div>
  )
}

export default FirstSec