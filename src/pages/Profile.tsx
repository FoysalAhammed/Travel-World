import React from 'react';
import { Plane, Award, Target, Users, Globe, TrendingUp, Calendar, Shield, Quote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Travel Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
            <p className="text-xl mb-8">Creating unforgettable journeys since 2010</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Plan Your Trip
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, stat: '10,000+', label: 'Happy Clients' },
              { icon: Globe, stat: '50+', label: 'Destinations' },
              { icon: Award, stat: '98%', label: 'Satisfaction Rate' },
              { icon: Calendar, stat: '13', label: 'Years Experience' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <item.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 relative">
              <Quote className="absolute text-blue-100 w-16 h-16 -top-6 -left-6" />
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Sarah Johnson"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center mb-2">Sarah Johnson</h3>
                <p className="text-blue-600 text-center mb-4">Head of Adventures</p>
                <p className="text-gray-600 italic">
                  "With 15 years in luxury travel planning, I've learned that every journey tells a unique story. Our team's dedication to crafting these stories is what sets us apart."
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 relative">
              <Quote className="absolute text-blue-100 w-16 h-16 -top-6 -left-6" />
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Michael Chen"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center mb-2">Michael Chen</h3>
                <p className="text-blue-600 text-center mb-4">Destination Specialist</p>
                <p className="text-gray-600 italic">
                  "Every destination has hidden gems waiting to be discovered. Our mission is to uncover these treasures and create unforgettable experiences for our clients."
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 relative">
              <Quote className="absolute text-blue-100 w-16 h-16 -top-6 -left-6" />
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Emma Rodriguez"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center mb-2">Emma Rodriguez</h3>
                <p className="text-blue-600 text-center mb-4">Customer Experience Director</p>
                <p className="text-gray-600 italic">
                  "Our success is measured by the smiles on our clients' faces. We take pride in turning travel dreams into lasting memories."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team Success"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Success Story</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consistent Growth</h3>
                    <p className="text-gray-600">200% increase in client base over the last 5 years</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
                    <p className="text-gray-600">Named "Best Travel Agency" for 3 consecutive years</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Plane className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Partnerships</h3>
                    <p className="text-gray-600">Established partnerships with 100+ premium travel providers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vision for the Future</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-8 rounded-lg">
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Sustainable Tourism</h3>
              <p className="text-blue-100">
                Committed to reducing our carbon footprint by 50% and promoting eco-friendly travel experiences by 2025.
              </p>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <Globe className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Global Expansion</h3>
              <p className="text-blue-100">
                Planning to open new offices in 10 major cities worldwide to better serve our international clients.
              </p>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <Users className="w-12 h-12 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
              <p className="text-blue-100">
                Aiming to support local communities through tourism, with a goal to create 1000+ jobs by 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default App;