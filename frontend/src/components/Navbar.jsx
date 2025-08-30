import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    setShowMenu(false) // close mobile menu
    navigate('/login')
  }

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/doctors', label: 'ALL DOCTORS' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ]

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      {/* Logo */}
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo4} alt="Logo" />

      {/* Desktop Links */}
      <ul className='md:flex items-start gap-5 font-medium hidden'>
        {links.map(({ to, label }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `py-1 transition-colors duration-300 ${
                isActive ? 'text-red-600 font-semibold' : 'text-gray-800 hover:text-red-600'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </ul>

      {/* Right Section */}
      <div className='flex items-center gap-4'>
        {/* User logged in */}
        {token && userData ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={userData.image} alt="Profile" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-800 z-20 hidden group-hover:block transition-all duration-300'>
              <div className='min-w-48 bg-white rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-red-600 cursor-pointer transition-colors duration-300'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-red-600 cursor-pointer transition-colors duration-300'>My Appointments</p>
                <p onClick={logout} className='hover:text-red-600 cursor-pointer transition-colors duration-300'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          // User logged out
          <button
            onClick={() => navigate('/login')}
            className='bg-red-600 text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-red-800 transition-colors duration-300'
          >
            Create account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="Menu" />

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${showMenu ? 'w-full' : 'w-0'}`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo3} className='w-36' alt="Logo" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="Close" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            {links.map(({ to, label }) => (
              <NavLink
                key={label}
                onClick={() => setShowMenu(false)}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full inline-block transition-colors duration-300 ${
                    isActive ? 'text-red-600 font-semibold' : 'text-gray-800 hover:text-red-600'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile Create Account Button */}
            {!token && (
              <button
                onClick={() => {
                  setShowMenu(false)
                  navigate('/login')
                }}
                className='mt-4 bg-red-600 text-white px-8 py-3 rounded-full font-light hover:bg-red-800 transition-colors duration-300'
              >
                Create account
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
