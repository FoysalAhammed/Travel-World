import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown, FaPlane, FaHotel, FaInfoCircle, FaPhoneAlt, FaUserPlus } from 'react-icons/fa'
import { MdTravelExplore, MdCardTravel } from 'react-icons/md'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)

  return (
    <nav className="w-full py-4 px-4 md:px-6 fixed top-0 bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/icons/logo.jpeg" alt="Travel Agency Logo" className="w-12 h-13 object-contain" />
          <div className="flex flex-col">
            <div className="text-xl md:text-2xl font-bold text-gray-800">Travel Agency</div>
            <div className="text-sm text-violet-600 font-medium hidden md:block">Explore the World</div>
          </div>
        </Link>

        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
            <MdTravelExplore className="text-xl" />
            <span>Home</span>
          </Link>
          <div className="relative group">
            <button 
              className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors"
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
            >
              <FaInfoCircle className="text-xl" />
              <span>About Us</span>
              <FaChevronDown className="text-sm transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-2">
                <a 
                  href="/about/profile" 
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
                >
                  Company Profile
                </a>
                <a 
                  href="/about/awards" 
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
                >
                  Awards & Recognition
                </a>
                <a 
                  href="/about/gallery" 
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
                >
                  Photo Gallery
                </a>
              </div>
            </div>
          </div>
          <Link to="/flights" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
            <FaPlane className="text-xl" />
            <span>Flights</span>
          </Link>
          <a href="/packages" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
            <MdCardTravel className="text-xl" />
            <span>Packages</span>
          </a>
          <a href="/contact" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
            <FaPhoneAlt className="text-xl" />
            <span>Contact</span>
          </a>
        </div>

        {/* Create Account Button & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <a 
            href="/create-account"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
          >
            <FaUserPlus className="text-lg" />
            <span>Create Account</span>
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-violet-600 transition-colors"
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto py-4 px-4 space-y-4">
            <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
              <MdTravelExplore className="text-xl" />
              <span>Home</span>
            </Link>
            <div>
              <button 
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors"
              >
                <FaInfoCircle className="text-xl" />
                <span>About Us</span>
                <FaChevronDown className={`text-sm transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-8 mt-2 space-y-2 ${isAboutDropdownOpen ? 'block' : 'hidden'}`}>
                <a href="/about/profile" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
                  Company Profile
                </a>
                <a href="/about/awards" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
                  Awards & Recognition
                </a>
                <a href="/about/gallery" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
                  Photo Gallery
                </a>
              </div>
            </div>
            <Link to="/flights" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
              <FaPlane className="text-xl" />
              <span>Flights</span>
            </Link>
            <Link to="/hotels" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
              <FaHotel className="text-xl" />
              <span>Hotels</span>
            </Link>
            <a href="/packages" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
              <MdCardTravel className="text-xl" />
              <span>Packages</span>
            </a>
            <a href="/contact" className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition-colors">
              <FaPhoneAlt className="text-xl" />
              <span>Contact</span>
            </a>
            <a 
              href="/create-account"
              className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors justify-center"
            >
              <FaUserPlus className="text-lg" />
              <span>Create Account</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 