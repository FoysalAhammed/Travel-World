import { useState } from 'react';
import { Plane, Calendar, MapPin, Search, ArrowRight, Clock, Wallet, Shield, Users } from 'lucide-react';

interface FlightSearch {
  from: string;
  to: string;
  departDate: string;
  passengers: number;
}

interface Flight {
  id: string;
  airline: string;
  from: string;
  to: string;
  departTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: number;
}

function App() {
  const [search, setSearch] = useState<FlightSearch>({
    from: '',
    to: '',
    departDate: '',
    passengers: 1
  });

  const [showResults, setShowResults] = useState(false);

  const sampleFlights: Flight[] = [
    {
      id: '1',
      airline: 'TravelPro Airways',
      from: 'New York (JFK)',
      to: 'London (LHR)',
      departTime: '09:00 AM',
      arrivalTime: '9:30 PM',
      duration: '7h 30m',
      price: 549,
      stops: 0
    },
    {
      id: '2',
      airline: 'SkyWay Airlines',
      from: 'New York (JFK)',
      to: 'London (LHR)',
      departTime: '11:30 AM',
      arrivalTime: '11:55 PM',
      duration: '7h 25m',
      price: 489,
      stops: 1
    },
    {
      id: '3',
      airline: 'Global Express',
      from: 'New York (JFK)',
      to: 'London (LHR)',
      departTime: '2:15 PM',
      arrivalTime: '2:45 AM',
      duration: '7h 30m',
      price: 599,
      stops: 0
    },
    {
      id: '3',
      airline: 'Bangladesh Airlines',
      from: 'Dhaka (DAC)',
      to: 'London (LHR)',
      departTime: '2:15 PM',
      arrivalTime: '2:45 AM',
      duration: '7h 30m',
      price: 599,
      stops: 0
    },
    {
      id: '3',
      airline: 'Emirates',
      from: 'Dhaka (DAC)',
      to: 'Riyadh (RUH)',
      departTime: '2:15 PM',
      arrivalTime: '2:45 AM',
      duration: '7h 30m',
      price: 699,
      stops: 0
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Airplane wing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Find Your Perfect Flight</h1>
            <p className="text-xl mb-8">Discover amazing deals on flights worldwide with our easy booking system</p>
          </div>
        </div>
      </header>

      {/* Search Form */}
      <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-10 mb-16">
        <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={search.from}
                  onChange={(e) => setSearch({ ...search, from: e.target.value })}
                  className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Departure City"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={search.to}
                  onChange={(e) => setSearch({ ...search, to: e.target.value })}
                  className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Arrival City"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={search.departDate}
                  onChange={(e) => setSearch({ ...search, departDate: e.target.value })}
                  className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  value={search.passengers}
                  onChange={(e) => setSearch({ ...search, passengers: parseInt(e.target.value) })}
                  className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search Flights
            </button>
          </div>
        </form>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Wallet className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Best Price Guarantee</h3>
                <p className="text-gray-600">Find the best deals and competitive prices on flights worldwide</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Safe & Secure</h3>
                <p className="text-gray-600">Book with confidence with our secure payment system</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Get assistance anytime with our round-the-clock customer service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Results */}
      {showResults && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Available Flights</h2>
            <div className="space-y-6">
              {sampleFlights.map((flight) => (
                <div key={flight.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-8">
                        <div>
                          <p className="text-sm text-gray-500">Departure</p>
                          <p className="text-xl font-bold">{flight.departTime}</p>
                          <p className="text-gray-600">{flight.from}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-[2px] w-24 bg-gray-300"></div>
                          <Plane className="w-5 h-5 text-blue-600" />
                          <div className="h-[2px] w-24 bg-gray-300"></div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Arrival</p>
                          <p className="text-xl font-bold">{flight.arrivalTime}</p>
                          <p className="text-gray-600">{flight.to}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">
                          {flight.airline} • {flight.duration} • {flight.stops === 0 ? 'Direct' : `${flight.stops} Stop`}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-center md:text-right">
                      <p className="text-3xl font-bold text-blue-600">${flight.price}</p>
                      <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
                        Select <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

export default App;