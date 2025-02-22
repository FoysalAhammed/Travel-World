import React, { useState, useEffect } from 'react'
import { FaPlane, FaClock, FaExchangeAlt, FaFilter, FaRegClock, FaDollarSign, FaInfoCircle, FaUser, FaCalendarAlt, FaChair, FaMapMarkerAlt, FaLongArrowAltRight } from 'react-icons/fa'
import { IoAirplane } from 'react-icons/io5'
import { SiAvianca, SiCopaairlines } from 'react-icons/si'

interface Flight {
  id: string
  airline: string
  airlineLogo: string
  departure: {
    time: string
    airport: string
    code: string
  }
  arrival: {
    time: string
    airport: string
    code: string
  }
  duration: string
  stops: number
  transit?: {
    airport: string
    duration: string
  }[]
  price: number
  type: 'cheapest' | 'fastest' | 'recommended' | 'regular'
}

const FlightResults: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'cheapest' | 'fastest' | 'recommended'>('recommended')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Mock flight data
  const flights: Flight[] = [
    {
      id: '1',
      airline: 'Avianca',
      airlineLogo: '/airlines/avianca.png',
      departure: {
        time: '10:30',
        airport: 'José Martí International',
        code: 'HAV'
      },
      arrival: {
        time: '18:45',
        airport: 'Cheddi Jagan International',
        code: 'GEO'
      },
      duration: '8h 15m',
      stops: 1,
      transit: [{
        airport: 'El Dorado International',
        duration: '2h 30m'
      }],
      price: 2499,
      type: 'recommended'
    },
    {
      id: '2',
      airline: 'Copa Airlines',
      airlineLogo: '/airlines/copa.png',
      departure: {
        time: '08:15',
        airport: 'José Martí International',
        code: 'HAV'
      },
      arrival: {
        time: '14:30',
        airport: 'Benito Juárez International',
        code: 'MEX'
      },
      duration: '6h 15m',
      stops: 1,
      transit: [{
        airport: 'Tocumen International',
        duration: '1h 45m'
      }],
      price: 2799,
      type: 'fastest'
    },
    {
      id: '3',
      airline: 'Avianca',
      airlineLogo: '/airlines/avianca.png',
      departure: {
        time: '07:45',
        airport: 'José Martí International',
        code: 'HAV'
      },
      arrival: {
        time: '19:15',
        airport: 'Augusto C. Sandino International',
        code: 'MGA'
      },
      duration: '11h 30m',
      stops: 2,
      transit: [
        {
          airport: 'El Salvador International',
          duration: '2h 15m'
        },
        {
          airport: 'Juan Santamaría International',
          duration: '1h 30m'
        }
      ],
      price: 1799,
      type: 'cheapest'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 animate-slide-in-top">
      {/* Search Summary */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-violet-500" />
              <span>HAV</span>
              <FaLongArrowAltRight className="text-violet-500" />
              <span>GEO</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-violet-500" />
              <span>4 Feb 2024</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center gap-1">
              <FaUser className="text-violet-500" />
              <span>1 Adulto</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center gap-1">
              <FaChair className="text-violet-500" />
              <span>Económico</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6 animate-fade-in">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center gap-2 text-gray-800 font-medium mb-4">
                <FaFilter className="text-violet-500" />
                <span>Filtros</span>
              </div>
              
              <div className="space-y-4">
                {/* Price Range */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <FaDollarSign className="text-violet-500" />
                    <span>Rango de Precio</span>
                  </div>
                  <input 
                    type="range" 
                    min="1500" 
                    max="3500" 
                    className="w-full accent-violet-500"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>$1,500</span>
                    <span>$3,500</span>
                  </div>
                </div>

                {/* Stops */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <FaExchangeAlt className="text-violet-500" />
                    <span>Escalas</span>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded text-violet-500" />
                      <span>Directo</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded text-violet-500" />
                      <span>1 Escala</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded text-violet-500" />
                      <span>2+ Escalas</span>
                    </label>
                  </div>
                </div>

                {/* Airlines */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <IoAirplane className="text-violet-500" />
                    <span>Aerolíneas</span>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded text-violet-500" />
                      <span>Avianca</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded text-violet-500" />
                      <span>Copa Airlines</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 space-y-6">
            {/* Quick Filters */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 overflow-x-auto">
                <button 
                  onClick={() => setActiveFilter('recommended')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeFilter === 'recommended' 
                      ? 'bg-violet-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaInfoCircle />
                  Recomendado
                </button>
                <button 
                  onClick={() => setActiveFilter('cheapest')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeFilter === 'cheapest' 
                      ? 'bg-violet-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaDollarSign />
                  Más Económico
                </button>
                <button 
                  onClick={() => setActiveFilter('fastest')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeFilter === 'fastest' 
                      ? 'bg-violet-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FaClock />
                  Más Rápido
                </button>
              </div>
            </div>

            {/* Flight Cards */}
            <div className="space-y-4">
              {flights
                .filter(flight => flight.type === activeFilter)
                .map(flight => (
                  <div key={flight.id} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      {/* Airline Info */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center">
                          {flight.airline === 'Avianca' ? (
                            <SiAvianca className="w-10 h-10 text-red-600" />
                          ) : (
                            <SiCopaairlines className="w-10 h-10 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{flight.airline}</div>
                          <div className="text-sm text-gray-500">Vuelo {flight.id}</div>
                        </div>
                      </div>

                      {/* Flight Info */}
                      <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        {/* Times */}
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="font-medium">{flight.departure.time}</div>
                            <div className="text-sm text-gray-500">{flight.departure.code}</div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="text-xs text-gray-500">{flight.duration}</div>
                            <div className="relative w-20">
                              <div className="absolute top-1/2 w-full h-px bg-gray-300"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <FaPlane className="text-violet-500 transform rotate-90" />
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">{flight.stops} {flight.stops === 1 ? 'escala' : 'escalas'}</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium">{flight.arrival.time}</div>
                            <div className="text-sm text-gray-500">{flight.arrival.code}</div>
                          </div>
                        </div>

                        {/* Price and Action */}
                        <div className="flex flex-col items-end gap-2">
                          <div className="text-2xl font-semibold text-violet-600">
                            ${flight.price}
                          </div>
                          <button className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
                            Seleccionar
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Transit Info */}
                    {flight.transit && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="text-sm text-gray-600">
                          <FaRegClock className="inline-block mr-2 text-violet-500" />
                          Escalas:
                          {flight.transit.map((stop, index) => (
                            <span key={index} className="ml-2">
                              {stop.airport} ({stop.duration})
                              {index < flight.transit!.length - 1 ? ',' : ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightResults 