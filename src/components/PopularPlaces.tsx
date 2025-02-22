import React, { useRef, useState } from 'react'
import { FaMapMarkerAlt, FaArrowRight, FaChevronLeft, FaChevronRight,  FaUsers } from 'react-icons/fa'
import { IoAirplaneOutline, IoRestaurantOutline, IoBedOutline, IoCarOutline} from 'react-icons/io5'

interface Duration {
  days: number
  nights: number
  priceMultiplier: number
}

interface TourPackage {
  id: number
  name: string
  availableDurations: Duration[]
  selectedDurationIndex: number
  location: string
  image: string
  discount: number
  basePrice: {
    original: number
    discounted: number
    currency: string
  }
  features: {
    flight: boolean
    hotel: boolean
    meals: boolean
    transport: boolean
  }
  highlights: string[]
  groupSize: {
    min: number
    max: number
  }
}

const tourPackages: TourPackage[] = [
  {
    id: 1,
    name: 'Guyana Cultural Experience',
    availableDurations: [
      { days: 4, nights: 3, priceMultiplier: 1 },
      { days: 6, nights: 5, priceMultiplier: 1.3 },
      { days: 8, nights: 7, priceMultiplier: 1.6 }
    ],
    selectedDurationIndex: 0,
    location: 'Georgetown, Guyana',
    image: 'https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg',
    discount: 15,
    basePrice: {
      original: 2499,
      discounted: 2125,
      currency: 'USD'
    },
    features: {
      flight: true,
      hotel: true,
      meals: true,
      transport: true
    },
    highlights: [
      'Vuelo directo desde La Habana',
      'Tour por Georgetown',
      'Visita al mercado Stabroek',
      'Excursión a las cataratas Kaieteur'
    ],
    groupSize: {
      min: 2,
      max: 12
    }
  },
  {
    id: 2,
    name: 'México Mágico',
    availableDurations: [
      { days: 5, nights: 4, priceMultiplier: 1 },
      { days: 7, nights: 6, priceMultiplier: 1.4 },
      { days: 9, nights: 8, priceMultiplier: 1.8 }
    ],
    selectedDurationIndex: 0,
    location: 'Ciudad de México, México',
    image: 'https://images.pexels.com/photos/3851456/pexels-photo-3851456.jpeg',
    discount: 20,
    basePrice: {
      original: 2799,
      discounted: 2239,
      currency: 'USD'
    },
    features: {
      flight: true,
      hotel: true,
      meals: true,
      transport: true
    },
    highlights: [
      'Vuelo directo desde La Habana',
      'Visita a Teotihuacán',
      'Tour gastronómico',
      'Centro histórico de CDMX'
    ],
    groupSize: {
      min: 2,
      max: 15
    }
  },
  {
    id: 3,
    name: 'Aventura en Nicaragua',
    availableDurations: [
      { days: 4, nights: 3, priceMultiplier: 1 },
      { days: 4, nights: 3, priceMultiplier: 0.78 },
      { days: 4, nights: 3, priceMultiplier: 0.73 },
      { days: 3, nights: 2, priceMultiplier: 0.60 }
    ],
    selectedDurationIndex: 0,
    location: 'Managua, Nicaragua',
    image: 'https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: 40,
    basePrice: {
      original: 2995,
      discounted: 2195,
      currency: 'USD'
    },
    features: {
      flight: true,
      hotel: true,
      meals: true,
      transport: true
    },
    highlights: [
      'Febrero 4,6,7,8 - $2995',
      'Febrero 11,13,14,16,18 - $2350',
      'Febrero 21,23,25,28 - $2195',
      'Marzo 2,4,5 - $1799'
    ],
    groupSize: {
      min: 2,
      max: 10
    }
  },
  {
    id: 4,
    name: 'Brasil Espectacular',
    availableDurations: [
      { days: 6, nights: 5, priceMultiplier: 1 },
      { days: 8, nights: 7, priceMultiplier: 1.4 },
      { days: 10, nights: 9, priceMultiplier: 1.8 }
    ],
    selectedDurationIndex: 0,
    location: 'São Paulo y Río de Janeiro, Brasil',
    image: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg',
    discount: 25,
    basePrice: {
      original: 3299,
      discounted: 2475,
      currency: 'USD'
    },
    features: {
      flight: true,
      hotel: true,
      meals: true,
      transport: true
    },
    highlights: [
      'Vuelo desde La Habana',
      'Cristo Redentor',
      'Playa de Copacabana',
      'Tour por São Paulo'
    ],
    groupSize: {
      min: 2,
      max: 15
    }
  },
  {
    id: 5,
    name: 'Maldives Paradise',
    availableDurations: [
      { days: 4, nights: 3, priceMultiplier: 1 },
      { days: 6, nights: 5, priceMultiplier: 1.5 },
      { days: 8, nights: 7, priceMultiplier: 2 }
    ],
    selectedDurationIndex: 1,
    location: 'Male, Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&h=600&fit=crop',
    discount: 20,
    basePrice: {
      original: 189999,
      discounted: 151999,
      currency: 'MVR'
    },
    features: {
      flight: true,
      hotel: true,
      meals: true,
      transport: true
    },
    highlights: [
      'Crystal clear waters',
      'White sandy beaches',
      'Underwater adventures',
      'Luxurious resorts'
    ],
    groupSize: {
      min: 2,
      max: 10
    }
  },
  {
    id: 6,
    name: 'Dubai Experience',
    availableDurations: [
      { days: 4, nights: 3, priceMultiplier: 1 },
      { days: 5, nights: 4, priceMultiplier: 1.2 },
      { days: 7, nights: 6, priceMultiplier: 1.5 }
    ],
    selectedDurationIndex: 1,
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&h=600&fit=crop',
    discount: 20,
    basePrice: {
      original: 169999,
      discounted: 135999,
      currency: 'AED'
    },
    features: {
      flight: true,
      hotel: true,
      meals: true,
      transport: true
    },
    highlights: [
      'Skyscrapers',
      'Desert safari',
      'Shopping paradise',
      'Luxurious hotels'
    ],
    groupSize: {
      min: 2,
      max: 10
    }
  }
]

const formatPrice = (price: number): string => {
  // Since all prices are in USD/USDT, we only need one format
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price)
}

const PopularPlaces: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [packages, setPackages] = useState(tourPackages)

  const updatePackageDuration = (packageId: number, durationIndex: number) => {
    setPackages(prev => prev.map(pack => 
      pack.id === packageId 
        ? { ...pack, selectedDurationIndex: durationIndex }
        : pack
    ))
  }

  const calculatePrice = (basePrice: number, multiplier: number): number => {
    return Math.round(basePrice * multiplier)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -scrollContainerRef.current.offsetWidth : scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="pt-[280px] sm:pt-32 pb-16 sm:pb-24 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Paquetes Populares
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros destinos más solicitados con vuelos directos desde Cuba. Experiencias únicas con todo incluido y los mejores precios.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => scroll('left')}
              className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-md hover:bg-white transition-colors"
            >
              <FaChevronLeft className="text-gray-600 text-lg sm:text-xl" />
            </button>
          </div>

          <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <button 
              onClick={() => scroll('right')}
              className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-md hover:bg-white transition-colors"
            >
              <FaChevronRight className="text-gray-600 text-lg sm:text-xl" />
            </button>
          </div>

          {/* Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-2 px-2 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {packages.map((pack) => {
              const selectedDuration = pack.availableDurations[pack.selectedDurationIndex]
              const discountedPrice = calculatePrice(pack.basePrice.discounted, selectedDuration.priceMultiplier)
              const originalPrice = calculatePrice(pack.basePrice.original, selectedDuration.priceMultiplier)

              return (
                <div key={pack.id} className="min-w-[260px] sm:min-w-[280px] flex-shrink-0 snap-start">
                  <div className="group bg-white rounded-2xl sm:rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Image Card */}
                    <div className="relative h-[180px] sm:h-[200px]">
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium z-10 shadow-sm">
                        {pack.discount}% OFF
                      </div>
                      <img
                        src={pack.image}
                        alt={pack.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                      {/* Location and Duration Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
                          <FaMapMarkerAlt className="text-violet-600 text-sm sm:text-base" />
                          <span className="text-xs sm:text-sm">{pack.location}</span>
                        </div>
                        <select 
                          value={pack.selectedDurationIndex}
                          onChange={(e) => updatePackageDuration(pack.id, parseInt(e.target.value))}
                          className="text-xs bg-gray-50 border border-gray-200 rounded-full px-2 sm:px-3 py-1 focus:outline-none focus:ring-1 focus:ring-violet-500"
                        >
                          {pack.availableDurations.map((duration, index) => (
                            <option key={index} value={index}>
                              {duration.days}D/{duration.nights}N
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-medium text-gray-800">{pack.name}</h3>

                      {/* Features */}
                      <div className="flex gap-3 sm:gap-4 text-gray-600">
                        {pack.features.flight && <IoAirplaneOutline className="text-base sm:text-lg" />}
                        {pack.features.hotel && <IoBedOutline className="text-base sm:text-lg" />}
                        {pack.features.meals && <IoRestaurantOutline className="text-base sm:text-lg" />}
                        {pack.features.transport && <IoCarOutline className="text-base sm:text-lg" />}
                      </div>

                      {/* Highlights */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-600">
                          <FaUsers className="text-xs sm:text-sm" />
                          <span>Group size: {pack.groupSize.min}-{pack.groupSize.max} people</span>
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600 space-y-1 sm:space-y-1.5">
                          {pack.highlights.slice(0, 2).map((highlight, index) => (
                            <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                              <div className="w-1 h-1 rounded-full bg-violet-600"></div>
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price Section */}
                      <div className="flex items-end gap-1.5 sm:gap-2">
                        <div className="text-base sm:text-lg font-medium text-violet-600">
                          {formatPrice(discountedPrice)}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-500 line-through mb-0.5">
                          {formatPrice(originalPrice)}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full py-2 sm:py-2.5 px-4 sm:px-5 flex items-center justify-center gap-1.5 sm:gap-2 transition-all group/btn">
                        <span className="font-normal text-xs sm:text-sm">View Details</span>
                        <FaArrowRight className="text-[10px] sm:text-xs transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  )
}

export default PopularPlaces 