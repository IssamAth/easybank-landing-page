import React from 'react'
import LOGO from '../../images/logowhite.svg'
import FACEBOOK from '../../images/icon-facebook.svg'
import YOUTUBE from '../../images/icon-youtube.svg'
import INSTAGRAM from '../../images/icon-instagram.svg'
import TWITTER from '../../images/icon-twitter.svg'
import PINTEREST from '../../images/icon-pinterest.svg'

const Footer = () => {
  return (
    <footer className=' container bg-footer text-white pt-8 pb-12'>
      {/* FLEX CONTAINER */}
      <div className="flex flex-col items-center">
        {/* 1 LOGO AND ICONS */}
        <div className=' flex flex-col'>
          {/* LOGO */}
          <div className='flex justify-center'>
            <img src={LOGO} className=' w-28' alt="" />
          </div>
          {/* ICONS */}
          <div className="flex space-x-3 mt-6">
            <div>
              <img src={FACEBOOK} alt="" />
            </div>
            <div>
              <img src={YOUTUBE} alt="" />
            </div>
            <div>
              <img src={TWITTER} alt="" />
            </div>
            <div>
              <img src={PINTEREST} alt="" />
            </div>
            <div>
              <img src={INSTAGRAM} alt="" />
            </div>
          </div>
        </div>
        {/* 2 NAVIGATION FIRST PART*/}
        <div className="flex flex-col items-center mt-7 space-y-3 text-bxs font-extralight">
          <div><a href="#">About US</a></div>
          <div><a href="#">Contact</a></div>
          <div><a href="#">Blog</a></div>
        </div>
        {/* 2 NAVIGATION SECOND PART*/}
        <div className="flex flex-col items-center space-y-3 text-bxs font-extralight mt-3">
          <div><a href="#">Careers</a></div>
          <div><a href="#">Support</a></div>
          <div><a href="#">Privacy Policy</a></div>
        </div>
        {/* BUTTON AND COPYRIGHT */}
        <div className="flex flex-col">
          {/* BUTTON */}
          <div className=' mt-9 flex justify-center'>
            <button className=' bg-green-400 py-3 px-9 rounded-full text-white'>Request Invite</button>
          </div>
          {/* COPYRIGHT */}
          <div className=' mt-8'>
            <p className=' text-bsm text-copyRight font-medium'>&copy; Easybank. All Rigths Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer