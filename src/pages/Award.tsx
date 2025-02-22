import React from 'react';
import { Award, Trophy, Star, Medal, Crown, Shield, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Trophy className="w-20 h-20 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Excellence in Travel Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Recognized nationally for our outstanding commitment to creating exceptional travel experiences
          </p>
        </div>
      </header>

      {/* Featured Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Most Prestigious Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Best Travel Agency 2024</h3>
              <p className="text-gray-600 mb-4">National Tourism Excellence Awards</p>
              <div className="text-sm text-gray-500">
                Recognized for exceptional service quality and customer satisfaction
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <Medal className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Innovation in Travel</h3>
              <p className="text-gray-600 mb-4">Global Travel Tech Awards</p>
              <div className="text-sm text-gray-500">
                Leading the industry in digital transformation and customer experience
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <Star className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Sustainability Champion</h3>
              <p className="text-gray-600 mb-4">Eco-Tourism Awards</p>
              <div className="text-sm text-gray-500">
                Excellence in promoting sustainable and responsible tourism
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey of Excellence</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-xl">
              <Award className="w-16 h-16 text-blue-600 flex-shrink-0" />
              <div>
                <div className="text-sm text-blue-600 font-semibold mb-2">2024</div>
                <h3 className="text-xl font-bold mb-2">National Travel Excellence Award</h3>
                <p className="text-gray-600">Recognized for outstanding contribution to the travel industry and maintaining the highest standards of service excellence.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-xl">
              <Shield className="w-16 h-16 text-green-600 flex-shrink-0" />
              <div>
                <div className="text-sm text-blue-600 font-semibold mb-2">2023</div>
                <h3 className="text-xl font-bold mb-2">Customer Trust Award</h3>
                <p className="text-gray-600">Awarded for maintaining exceptional customer satisfaction rates and building long-lasting client relationships.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-xl">
              <Globe className="w-16 h-16 text-purple-600 flex-shrink-0" />
              <div>
                <div className="text-sm text-blue-600 font-semibold mb-2">2022</div>
                <h3 className="text-xl font-bold mb-2">Global Destination Expert</h3>
                <p className="text-gray-600">Recognized for comprehensive destination knowledge and creating unique, authentic travel experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Industry Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Industry Awards' },
              { number: '50+', label: 'National Recognitions' },
              { number: '25+', label: 'Excellence Certificates' },
              { number: '10+', label: 'International Honors' },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;