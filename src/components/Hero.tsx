import React from 'react'
import BookingCard from './BookingCard'

const Hero: React.FC = () => {
  return (
    <div className="relative px-2 sm:px-4">
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative h-[500px] sm:h-[600px] md:h-[700px]">
        {/* Banner Image */}
        <img 
          src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
          alt="Havana Cuba Skyline" 
          className="w-full h-full object-cover object-center"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10">
          <div className="container mx-auto h-full flex flex-col items-center text-center px-4 md:px-8 pt-24 sm:pt-32 md:pt-40">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-3xl">
              Vuelos directos desde Cuba a destinos internacionales
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mt-2 sm:mt-4 max-w-2xl">
              Conectando Cuba con Guyana, México, Surinam, Brasil y Nicaragua con los mejores precios y servicios
            </p>
          </div>
        </div>
      </div>

      {/* Booking Card Container */}
      <div className="container mx-auto px-2 sm:px-4 relative">
        <div className="absolute left-0 right-0 -top-32 sm:-top-40 md:-top-48">
          <BookingCard />
        </div>
      </div>
      
      {/* Spacer for the overlapping card */}
      <div className="h-[280px] sm:h-40"></div>
    </div>
  )
}

export default Hero 