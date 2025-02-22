import React from 'react'
import { FaStar } from 'react-icons/fa'

interface Testimonial {
  id: number
  name: string
  rating: number
  image: string
  destination: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    rating: 4.9,
    destination: 'México',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'María González',
    rating: 4.8,
    destination: 'Brasil',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'Juan Pérez',
    rating: 4.9,
    destination: 'Nicaragua',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  }
]

const TravelBenefits: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4">
                Viaja y crea momentos inolvidables
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Descubre destinos internacionales con los mejores precios
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Benefit 1 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 font-semibold text-sm sm:text-base">
                  1
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">
                    Destinos internacionales directos
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Vuelos directos a México, Guyana, Brasil, Nicaragua y Surinam
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 font-semibold text-sm sm:text-base">
                  2
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">
                    Pagos internacionales seguros
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Múltiples opciones de pago: USDT, Bitcoin, Visa y más
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-green-100 text-green-600 font-semibold text-sm sm:text-base">
                  3
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">
                    Asistencia personalizada
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Soporte 24/7 vía WhatsApp y atención personalizada
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-violet-600 hover:bg-violet-700 text-white rounded-full py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base transition-colors">
              Reserva ahora
            </button>
          </div>

          {/* Right Content */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
                alt="Havana Cuba Skyline"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Testimonials */}
            {testimonials.map((testimonial, index) => {
              const positions = [
                'top-4 left-4',
                'top-4 right-4',
                'bottom-4 left-1/2 -translate-x-1/2'
              ]

              return (
                <div
                  key={testimonial.id}
                  className={`absolute ${positions[index]} bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg flex items-center gap-2 sm:gap-3 hover:bg-white transition-colors max-w-[180px] sm:max-w-[220px]`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">
                      {testimonial.name}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                        <span className="text-[10px] sm:text-xs font-medium">
                          {testimonial.rating}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-600">
                        Viaje a {testimonial.destination}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TravelBenefits 