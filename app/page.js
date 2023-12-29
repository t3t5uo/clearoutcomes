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
      {/* Header Menu */}
      <header className="shadow-md p-5 bg-white relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://i.imgur.com/d4T5lzW.jpg" alt="Clear Outcomes Logo" className="h-10 mr-2" />
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
      {/* Section 1: Hero */}
      <section className="flex bg-cover bg-center py-20 md:py-32" style={{ backgroundImage: `url(${placeholderImageUrl})` }}>
        <div className="container mx-auto">
          <div className="w-full px-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our mission is to help UK charities demonstrate convincingly the outcomes they achieve.</h1>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">Services</button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">Why Outcomes</h2>
          <p className="text-base md:text-lg mb-6 md:mb-10 text-center max-w-xl md:max-w-2xl mx-auto">Outcomes are the positive differences that charities achieve for the people they support, empower and campaign for.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {['Secure new or continued funding', 'Keep staff and supporters motivated', 'Be accountable to funders, and to the people they support', 'Understand how best to use their resources', 'Be credible as a campaigning or delivery organisation'].map((point, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center mb-3 md:mb-4">
                <img src={placeholderImageUrl} alt="Placeholder" className="w-full md:w-auto mb-3 md:mb-0 md:mr-4 rounded-lg shadow-lg" style={{ maxWidth: '150px', maxHeight: '100px' }} />
                <p className="text-md md:text-lg">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-base md:text-lg mt-6 md:mt-10 text-center max-w-xl md:max-w-3xl mx-auto">Defining, measuring and reporting outcomes can be challenging - not knowing where to start or what to measure. The language of outcomes can be confusing and jargon-filled. Ethical risks and privacy issues need careful handling. For example, many survey tools store personal data outside the UK or European Union.</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-4 md:mb-6 rounded-lg" style={{ maxWidth: '250px', maxHeight: '187px' }} />
              <p className="text-md md:text-lg">We have over thirty years’ experience in delivering analytical insights in clear, compelling ways.</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-4 md:mb-6 rounded-lg" style={{ maxWidth: '250px', maxHeight: '187px' }} />
              <p className="text-md md:text-lg">We invest time in listening to our clients and offer an objective, professional approach.</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-4 md:mb-6 rounded-lg" style={{ maxWidth: '250px', maxHeight: '187px' }} />
              <p className="text-md md:text-lg">We understand that charities are under severe financial pressures. We aim to be as helpful as we can and our fees are flexible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="container mx-auto py-8 px-4">
          <p className="text-gray-700 text-center text-sm">
            Clear Outcomes Research is the business name of Ian Dale Ltd, a company registered in Bulgaria with company number 206909723.
          </p>
          <p className="text-gray-700 text-center text-sm mt-2">
            We take your privacy and the privacy of everyone whose data we hold extremely seriously. You can find our privacy policy 
            <a href="#privacy-policy" className="text-green-1000 hover:text-green-800"> here.</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
