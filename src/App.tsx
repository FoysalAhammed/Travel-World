import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularPlaces from './components/PopularPlaces'
import TravelBenefits from './components/TravelBenefits'
import ExploreDestinations from './components/ExploreDestinations'
import FloatingChat from './components/FloatingChat'
import Footer from './components/Footer'
import FlightResults from './components/FlightResults'
import Profile from './pages/Profile'
import Awards from './pages/Award'
import PhotoGallery from './pages/PhotoGallery'
import Flight from './pages/Flight'

const Home: React.FC = () => {
  return (
    <>
      <div className="pt-16">
        <Hero />
        <PopularPlaces />
        <TravelBenefits />
        <ExploreDestinations />
      </div>
    </>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFFFF] text-gray-800">
        <Navbar />
        <main className="pt-[42px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flight-results" element={<FlightResults />} />
            <Route path="/about/profile" element={<Profile/>} />
            <Route path="/about/awards" element={<Awards/>} />
            <Route path="/about/gallery" element={<PhotoGallery/>} />
            <Route path="/flights" element={<Flight/>} />
          </Routes>
        </main>
        <Footer />
        <FloatingChat />
      </div>
    </Router>
  )
}

export default App 