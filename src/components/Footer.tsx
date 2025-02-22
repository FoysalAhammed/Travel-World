import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { SiVisa, SiMastercard, SiPaypal, SiWesterndigital, SiBitcoin } from 'react-icons/si'
import { FaEthereum } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/icons/logo.jpeg" alt="Logo" className="w-10 h-10 object-contain" />
              <div className="font-bold text-xl">Dynamic Travels</div>
            </div>
            <p className="text-gray-400 text-sm">
              Especialistas en viajes internacionales desde Cuba, ofreciendo las mejores experiencias y precios competitivos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-violet-500" />
                La Habana, Cuba
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-violet-500" />
                info@example.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-violet-500" />
                Tel: +53 XXXXXXXX
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-violet-500" />
                WhatsApp: +53 XXXXXXXX
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Métodos de Pago</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-2 rounded flex items-center justify-center">
                <SiVisa className="text-[#1434CB] text-3xl" />
              </div>
              <div className="bg-white p-2 rounded flex items-center justify-center">
                <SiMastercard className="text-[#EB001B] text-3xl" />
              </div>
              <div className="bg-white p-2 rounded flex items-center justify-center">
                <SiPaypal className="text-[#00457C] text-3xl" />
              </div>
              <div className="bg-white p-2 rounded flex items-center justify-center">
                <SiWesterndigital className="text-[#FFDD00] text-3xl" />
              </div>
              <div className="bg-white p-2 rounded flex items-center justify-center">
                <SiBitcoin className="text-[#F7931A] text-3xl" />
              </div>
              <div className="bg-white p-2 rounded flex items-center justify-center">
                <FaEthereum className="text-[#3C3C3D] text-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-violet-600 transition-colors">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-violet-600 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-violet-600 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-violet-600 transition-colors">
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dynamic Travels. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 