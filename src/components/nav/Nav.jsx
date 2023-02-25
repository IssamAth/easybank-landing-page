import React from 'react'
import './nav.css'
import Logo from '../../images/logo.svg'

const Nav = () => {
    return (
        <div className=' container bg-white text-black flex h-14 items-center justify-between'>
            {/* LOGO */}
            <div>
                <img src={Logo} className=' w-32' alt="logo" />
            </div>
            {/* Humberguer Menu */}
            <div className=''>
                <button class="menu-btn hamburger h-full mt-2 md:hidden">
                    <div class="bar"></div>
                </button>
            </div>
        </div>
    )
}

export default Nav