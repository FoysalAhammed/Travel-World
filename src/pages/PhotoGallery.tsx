import { useState } from 'react';
import {Camera } from 'lucide-react';

type Category = 'beach' | 'mountain' | 'city' | 'cultural';

interface GalleryImage {
  id: number;
  url: string;
  category: Category;
  title: string;
  location: string;
}

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('beach');

  const categories: { id: Category; label: string }[] = [
    { id: 'beach', label: 'Beach Destinations' },
    { id: 'mountain', label: 'Mountain Adventures' },
    { id: 'city', label: 'City Breaks' },
    { id: 'cultural', label: 'Cultural Tours' },
  ];

  const images: GalleryImage[] = [
    // Beach Destinations
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'beach',
      title: 'Tropical Paradise',
      location: 'Maldives'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'beach',
      title: 'Crystal Waters',
      location: 'Bora Bora'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'beach',
      title: 'Sunset Beach',
      location: 'Hawaii'
    },
    // Mountain Adventures
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'mountain',
      title: 'Alpine Peak',
      location: 'Swiss Alps'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'mountain',
      title: 'Mountain Lake',
      location: 'Canadian Rockies'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'mountain',
      title: 'Winter Wonder',
      location: 'Alps'
    },
    // City Breaks
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'city',
      title: 'Paris Lights',
      location: 'France'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'city',
      title: 'Tokyo Nights',
      location: 'Japan'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'city',
      title: 'New York Life',
      location: 'USA'
    },
    // Cultural Tours
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'cultural',
      title: 'Ancient Temple',
      location: 'Cambodia'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'cultural',
      title: 'Moroccan Markets',
      location: 'Morocco'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'cultural',
      title: 'Greek Heritage',
      location: 'Greece'
    },
  ];

  const filteredImages = images.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Camera className="w-20 h-20 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Discover Your Dream Destination</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our curated collection of breathtaking destinations across the globe
          </p>
        </div>
      </header>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors
                  ${activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;