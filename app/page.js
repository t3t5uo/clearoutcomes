"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const placeholderImageUrl = "https://i.imgur.com/jUXmn02.png";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      <Head>
        <title>Clear Outcomes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Menu */}
      <header className="shadow-md p-5 bg-white relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://i.imgur.com/d4T5lzW.jpg" alt="Clear Outcomes Logo" className="h-16 mr-2" />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-green-1000 focus:outline-none">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M3 12h18M3 18h18"></path>
              </svg>
            </button>
          </div>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-x-0 md:space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent z-20`}>
            <ul className="md:flex space-x-0 md:space-x-6">
              <li><a href="#about" className="block text-center text-gray-700 hover:text-green-1000 transition duration-300 py-2 md:py-0">About</a></li>
              <li><a href="#services" className="block text-center text-gray-700 hover:text-green-1000 transition duration-300 py-2 md:py-0">Services</a></li>
              <li><a href="#blog" className="block text-center text-gray-700 hover:text-green-1000 transition duration-300 py-2 md:py-0">Blog</a></li>
              <li><a href="#contact" className="block text-center text-gray-700 hover:text-green-1000 transition duration-300 py-2 md:py-0">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

  {/* Section 1: Hero with Text Box */}
<section className="relative bg-cover bg-center py-40 md:py-60" style={{ backgroundImage: `url(${placeholderImageUrl})` }}>
  <div className="container mx-auto">
    <div className="w-full px-4 md:px-6 lg:px-12">
      {/* Semi-transparent background for text */}
      <div className="max-w-2xl bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our mission is to help UK charities demonstrate convincingly the outcomes they achieve.</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">More text goes here.</p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 text-lg md:text-xl">Learn More</button>
      </div>
    </div>
  </div>
</section>


{/* Section 2 */}
<section className="py-16 md:py-32">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-20">Why Outcomes</h2>
    <p className="text-lg md:text-2xl mb-10 md:mb-20 text-center max-w-3xl mx-auto">Outcomes are the positive differences that charities achieve for the people they support, empower and campaign for.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {['Secure new or continued funding', 'Keep staff and supporters motivated', 'Be accountable to funders, and to the people they support', 'Understand how best to use their resources', 'Be credible as a campaigning or delivery organisation'].map((point, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <img src={placeholderImageUrl} alt="Placeholder" className="w-full md:w-3/4 lg:w-full mb-6 rounded-lg shadow-xl transition duration-500 hover:scale-105" />
          <p className="text-xl md:text-2xl">{point}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Section 3 */}
      <section className="py-16 md:py-32 bg-gray-100">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-20">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      <div className="text-center p-6 md:p-8 bg-white rounded-lg shadow-md transition duration-500 hover:scale-105">
        <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-6 md:mb-8 rounded-lg" style={{ maxWidth: '350px', maxHeight: '262px' }} />
        <p className="text-xl md:text-2xl">We have over thirty years’ experience in delivering analytical insights in clear, compelling ways.</p>
      </div>
      <div className="text-center p-6 md:p-8 bg-white rounded-lg shadow-md transition duration-500 hover:scale-105">
        <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-6 md:mb-8 rounded-lg" style={{ maxWidth: '350px', maxHeight: '262px' }} />
        <p className="text-xl md:text-2xl">We invest time in listening to our clients and offer an objective, professional approach.</p>
      </div>
      <div className="text-center p-6 md:p-8 bg-white rounded-lg shadow-md transition duration-500 hover:scale-105">
        <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-6 md:mb-8 rounded-lg" style={{ maxWidth: '350px', maxHeight: '262px' }} />
        <p className="text-xl md:text-2xl">We understand that charities are under severe financial pressures. We aim to be as helpful as we can and our fees are flexible.</p>
      </div>
    </div>
  </div>
  </section>


      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="container mx-auto py-8 px-4">
          <p className="text-gray-700 text-center text-lg">
            Clear Outcomes Research is the business name of Ian Dale Ltd, a company registered in Bulgaria with company number 206909723.
          </p>
          <p className="text-gray-700 text-center text-lg mt-2">
            We take your privacy and the privacy of everyone whose data we hold extremely seriously. You can find our privacy policy 
            <a href="#privacy-policy" className="text-green-1000 hover:text-green-800"> here.</a>
          </p>
        </div>
      </footer>
    </div>
  );
}


