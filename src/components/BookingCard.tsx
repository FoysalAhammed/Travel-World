import { useState } from 'react'
import { FaPlane, FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa'
import { IoAirplane } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const BookingCard: React.FC = () => {
  const [flightType, setFlightType] = useState('oneWay')
  const [fromLocation, setFromLocation] = useState({ city: 'La Habana', code: 'HAV', airport: 'Aeropuerto Internacional José Martí', country: 'Cuba' })
  const [toLocation, setToLocation] = useState({ city: 'Georgetown', code: 'GEO', airport: 'Aeropuerto Internacional Cheddi Jagan', country: 'Guyana' })
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false)
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false)
  const [isTravellerDropdownOpen, setIsTravellerDropdownOpen] = useState(false)
  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  })
  const [selectedClass, setSelectedClass] = useState('economy')
  const navigate = useNavigate()

  const mockLocations = [
    { city: 'La Habana', code: 'HAV', airport: 'Aeropuerto Internacional José Martí', country: 'Cuba' },
    { city: 'Georgetown', code: 'GEO', airport: 'Aeropuerto Internacional Cheddi Jagan', country: 'Guyana' },
    { city: 'Ciudad de México', code: 'MEX', airport: 'Aeropuerto Internacional Benito Juárez', country: 'México' },
    { city: 'Paramaribo', code: 'PBM', airport: 'Aeropuerto Internacional Johan Adolf Pengel', country: 'Surinam' },
    { city: 'São Paulo', code: 'GRU', airport: 'Aeropuerto Internacional de São Paulo-Guarulhos', country: 'Brasil' },
    { city: 'Managua', code: 'MGA', airport: 'Aeropuerto Internacional Augusto C. Sandino', country: 'Nicaragua' }
  ]

  const travelClasses = [
    { id: 'economy', label: 'Economy' },
    { id: 'premiumEconomy', label: 'Premium Economy' },
    { id: 'business', label: 'Business' },
    { id: 'first', label: 'First Class' }
  ]

  const flightTypes = [
    { id: 'oneWay', label: 'One way' },
    { id: 'roundTrip', label: 'Round trip' },
    { id: 'multiCity', label: 'Multi city' }
  ]

  const LocationDropdown = ({ 
    isOpen, 
    onClose, 
    onSelect, 
    excludeLocation 
  }: { 
    isOpen: boolean, 
    onClose: () => void, 
    onSelect: (location: typeof mockLocations[0]) => void,
    excludeLocation: typeof mockLocations[0]
  }) => {
    if (!isOpen) return null

    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
        {mockLocations
          .filter(loc => loc.code !== excludeLocation.code)
          .map(location => (
            <button
              key={location.code}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => {
                onSelect(location)
                onClose()
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                  <FaPlane className="text-violet-600 rotate-[-45deg] text-sm" />
                </div>
                <div>
                  <div className="font-medium">{location.city}</div>
                  <div className="text-xs text-gray-400">{location.code}</div>
                </div>
              </div>
            </button>
          ))}
      </div>
    )
  }

  const TravellerDropdown = ({ isOpen }: { isOpen: boolean }) => {
    if (!isOpen) return null;

    const updateTravellers = (type: keyof typeof travellers, increment: boolean) => {
      setTravellers(prev => ({
        ...prev,
        [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
      }))
    }

    return (
      <div className="absolute top-0 left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
        {/* Adults */}
        <div className="p-2 hover:bg-gray-50 transition-colors border-b">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Adults</div>
              <div className="text-xs text-gray-500">Age 13+</div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  updateTravellers('adults', false)
                }}
                className="w-6 h-6 rounded border border-violet-200 flex items-center justify-center hover:border-violet-300 text-xs"
                disabled={travellers.adults <= 1}
              >
                -
              </button>
              <span className="w-5 text-center text-sm">{travellers.adults}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  updateTravellers('adults', true)
                }}
                className="w-6 h-6 rounded border border-violet-200 flex items-center justify-center hover:border-violet-300 text-xs"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Children */}
        <div className="p-2 hover:bg-gray-50 transition-colors border-b">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Children</div>
              <div className="text-xs text-gray-500">Age 2-12</div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  updateTravellers('children', false)
                }}
                className="w-6 h-6 rounded border border-violet-200 flex items-center justify-center hover:border-violet-300 text-xs"
              >
                -
              </button>
              <span className="w-5 text-center text-sm">{travellers.children}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  updateTravellers('children', true)
                }}
                className="w-6 h-6 rounded border border-violet-200 flex items-center justify-center hover:border-violet-300 text-xs"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Infants */}
        <div className="p-2 hover:bg-gray-50 transition-colors border-b">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Infants</div>
              <div className="text-xs text-gray-500">Under 2</div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  updateTravellers('infants', false)
                }}
                className="w-6 h-6 rounded border border-violet-200 flex items-center justify-center hover:border-violet-300 text-xs"
              >
                -
              </button>
              <span className="w-5 text-center text-sm">{travellers.infants}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  updateTravellers('infants', true)
                }}
                className="w-6 h-6 rounded border border-violet-200 flex items-center justify-center hover:border-violet-300 text-xs"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Cabin Class */}
        {travelClasses.map((tClass, index) => (
          <button
            key={tClass.id}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedClass(tClass.id)
              setIsTravellerDropdownOpen(false)
            }}
            className={`w-full text-left p-2 hover:bg-gray-50 transition-colors ${
              index !== travelClasses.length - 1 ? 'border-b' : ''
            }`}
          >
            <div className="text-sm font-medium">{tClass.label}</div>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      {/* Flight Type Selection */}
      <div className="flex gap-2 mb-4">
        {flightTypes.map(type => (
          <button
            key={type.id}
            onClick={() => setFlightType(type.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              flightType === type.id
                ? 'bg-violet-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Flight Search Form */}
      <div className="space-y-3">
        {/* From & To */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* From */}
          <div className="relative">
            <button
              onClick={() => setIsFromDropdownOpen(!isFromDropdownOpen)}
              className="w-full bg-gray-50 rounded-lg p-2 text-left hover:bg-gray-100 transition-colors relative"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                  <IoAirplane className="text-violet-600 rotate-[-45deg] text-sm" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500">From</div>
                  <div className="font-medium text-sm">{fromLocation.city}</div>
                  <div className="text-[10px] text-gray-400">{fromLocation.code}</div>
                </div>
              </div>
            </button>
            <LocationDropdown
              isOpen={isFromDropdownOpen}
              onClose={() => setIsFromDropdownOpen(false)}
              onSelect={setFromLocation}
              excludeLocation={toLocation}
            />
          </div>

          {/* To */}
          <div className="relative">
            <button
              onClick={() => setIsToDropdownOpen(!isToDropdownOpen)}
              className="w-full bg-gray-50 rounded-lg p-2 text-left hover:bg-gray-100 transition-colors relative"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                  <IoAirplane className="text-violet-600 rotate-[45deg] text-sm" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500">To</div>
                  <div className="font-medium text-sm">{toLocation.city}</div>
                  <div className="text-[10px] text-gray-400">{toLocation.code}</div>
                </div>
              </div>
            </button>
            <LocationDropdown
              isOpen={isToDropdownOpen}
              onClose={() => setIsToDropdownOpen(false)}
              onSelect={setToLocation}
              excludeLocation={fromLocation}
            />
          </div>
        </div>

        {/* Date & Travellers */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Date */}
          <button className="bg-gray-50 rounded-lg p-2 text-left hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                <FaCalendarAlt className="text-violet-600 text-sm" />
              </div>
              <div>
                <div className="text-[10px] text-gray-500">Date</div>
                <div className="font-medium text-sm">4 Feb 2024</div>
                <div className="text-[10px] text-gray-400">Sunday</div>
              </div>
            </div>
          </button>

          {/* Travellers & Class */}
          <div className="relative">
            <button
              onClick={() => setIsTravellerDropdownOpen(!isTravellerDropdownOpen)}
              className="w-full bg-gray-50 rounded-lg p-2 text-left hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                  <FaUser className="text-violet-600 text-sm" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500">Travellers</div>
                  <div className="font-medium text-sm">
                    {travellers.adults + travellers.children + travellers.infants}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {travelClasses.find(c => c.id === selectedClass)?.label}
                  </div>
                </div>
              </div>
            </button>
            <TravellerDropdown isOpen={isTravellerDropdownOpen} />
        </div>

        {/* Search Button */}
        <button
          onClick={() => {
            window.scrollTo(0, 0)
            navigate('/flight-results')
          }}
          className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg py-2 px-4 font-medium transition-colors flex items-center justify-center gap-2 text-sm h-[72px]"
        >
          <FaSearch className="text-sm" />
          <span>Search</span>
        </button>
        </div>
      </div>
    </div>
  )
}

export default BookingCard