import  { useState } from 'react'
import { FaMapMarkerAlt, FaFilter, FaStar, FaPlane, FaBed, FaCar, FaUtensils } from 'react-icons/fa'

interface Destination {
  id: number
  name: string
  location: string
  rating: number
  price: number
  image: string
  features: {
    flight: boolean
    hotel: boolean
    transport: boolean
    meals: boolean
  }
  dates?: string
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Aventura en Nicaragua',
    location: 'Managua, Nicaragua',
    rating: 4.8,
    price: 2995,
    image: 'https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: {
      flight: true,
      hotel: true,
      transport: true,
      meals: true
    },
    dates: 'Febrero 4,6,7,8'
  },
  {
    id: 2,
    name: 'Ciudad de México',
    location: 'CDMX, México',
    rating: 4.9,
    price: 2799,
    image: 'https://images.pexels.com/photos/3851456/pexels-photo-3851456.jpeg',
    features: {
      flight: true,
      hotel: true,
      transport: true,
      meals: true
    }
  },
  {
    id: 3,
    name: 'Descubre Guyana',
    location: 'Georgetown, Guyana',
    rating: 4.7,
    price: 2499,
    image: 'https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg',
    features: {
      flight: true,
      hotel: true,
      transport: true,
      meals: true
    }
  },
  {
    id: 4,
    name: 'Brasil Espectacular',
    location: 'São Paulo y Río, Brasil',
    rating: 4.9,
    price: 3299,
    image: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg',
    features: {
      flight: true,
      hotel: true,
      transport: true,
      meals: true
    }
  },
  {
    id: 5,
    name: 'Oferta Nicaragua',
    location: 'Managua, Nicaragua',
    rating: 4.8,
    price: 1799,
    image: 'https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: {
      flight: true,
      hotel: true,
      transport: true,
      meals: true
    },
    dates: 'Marzo 2,4,5'
  },
  {
    id: 6,
    name: 'Surinam Exótico',
    location: 'Paramaribo, Surinam',
    rating: 4.7,
    price: 2699,
    image: 'https://images.pexels.com/photos/7846485/pexels-photo-7846485.jpeg',
    features: {
      flight: true,
      hotel: true,
      transport: true,
      meals: true
    }
  }
]

const categories = ['Popular destination', 'Adventure', 'Beach', 'Urban', 'Desert', 'Mountains', 'Historical', 'Cultural']

const ExploreDestinations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Popular destination')
  const [showFilters, setShowFilters] = useState(false)

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Explore more
          </h2>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900"
          >
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>

        {/* Categories */}
        <div className="relative mb-6 sm:mb-8">
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-colors ${
                  activeCategory === category
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range (BDT)</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>Any price</option>
                  <option>Under ৳50,000</option>
                  <option>৳50,000 - ৳100,000</option>
                  <option>Above ৳100,000</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>All locations</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Americas</option>
                </select>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>Any rating</option>
                  <option>4.5 & above</option>
                  <option>4.0 & above</option>
                  <option>3.5 & above</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {destinations.map(destination => (
            <div key={destination.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="relative h-48 sm:h-56">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs sm:text-sm font-medium flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <FaMapMarkerAlt className="text-violet-600" />
                  <span className="text-sm">{destination.location}</span>
                </div>

                <h3 className="text-lg font-medium text-gray-800">{destination.name}</h3>

                {/* Features */}
                <div className="flex gap-3 text-gray-600">
                  {destination.features.flight && <FaPlane />}
                  {destination.features.hotel && <FaBed />}
                  {destination.features.transport && <FaCar />}
                  {destination.features.meals && <FaUtensils />}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="text-violet-600 font-medium">
                    {formatPrice(destination.price)}
                  </div>
                  <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm rounded-full px-4 py-1.5 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <button className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-full px-6 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base transition-colors">
            Show More Destinations
          </button>
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  )
}

export default ExploreDestinations 