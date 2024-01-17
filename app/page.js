"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const placeholderImageUrl = "/eval.jpg";

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
    <img src="/clearlogo.jpeg" alt="Clear Outcomes Logo" className="h-16 mr-2" />
    </div>
    <div className="hidden md:flex space-x-4">
      <a href="#about" className="text-gray-700 hover:text-green-600 transition duration-300">About</a>
      <a href="#services" className="text-gray-700 hover:text-green-600 transition duration-300">Services</a>
      <a href="#blog" className="text-gray-700 hover:text-green-600 transition duration-300">Blog</a>
      <a href="#contact" className="text-gray-700 hover:text-green-600 transition duration-300">Contact</a>
    </div>
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600 focus:outline-none">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
      </button>
    </div>
  </div>
  <nav className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full bg-white z-20 p-4 md:hidden`}>
    <a href="#about" className="text-gray-700 hover:text-green-600 transition duration-300 py-2">About</a>
    <a href="#services" className="text-gray-700 hover:text-green-600 transition duration-300 py-2">Services</a>
    <a href="#blog" className="text-gray-700 hover:text-green-600 transition duration-300 py-2">Blog</a>
    <a href="#contact" className="text-gray-700 hover:text-green-600 transition duration-300 py-2">Contact</a>
  </nav>
</header>



{/* Section 1: Hero */}
<section className="relative bg-cover bg-center py-40 md:py-60" style={{ backgroundImage: `url(${placeholderImageUrl})` }}>
  <div className="container mx-auto">
    <div className="w-full px-4 md:px-6 lg:px-12">
      <div className="max-w-2xl bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our mission is to help UK charities demonstrate convincingly the outcomes they achieve.</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Some more text here. </p>
        <button className="bg-green-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300 text-lg md:text-xl">Learn More</button>
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



     {/* Section 3: Larger Images */}
<section className="py-16 md:py-32 bg-gray-100">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-20">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      <div className="text-center p-6 md:p-8 bg-white rounded-lg shadow-md transition duration-500hover:scale-105">
        <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-6 md:mb-8 rounded-lg" style={{ maxWidth: '400px', maxHeight: '300px' }} />
        <p className="text-xl md:text-2xl">We have over thirty years’ experience in delivering analytical insights in clear, compelling ways.</p>
      </div>
      <div className="text-center p-6 md:p-8 bg-white rounded-lg shadow-md transition duration-500 hover:scale-105">
        <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-6 md:mb-8 rounded-lg" style={{ maxWidth: '400px', maxHeight: '300px' }} />
        <p className="text-xl md:text-2xl">We invest time in listening to our clients and offer an objective, professional approach.</p>
      </div>
      <div className="text-center p-6 md:p-8 bg-white rounded-lg shadow-md transition duration-500 hover:scale-105">
        <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-6 md:mb-8 rounded-lg" style={{ maxWidth: '400px', maxHeight: '300px' }} />
        <p className="text-xl md:text-2xl">We understand that charities are under severe financial pressures. We aim to be as helpful as we can and our fees are flexible.</p>
      </div>
    </div>
  </div>
</section>



<footer className="bg-gray-100">
  <div className="container mx-auto py-4 px-4 md:px-12">
    <p className="text-gray-600 text-center text-xs md:text-sm">
      Clear Outcomes Research is the business name of Ian Dale Ltd, a company registered in Bulgaria with company number 206909723.
    </p>
    <p className="text-gray-600 text-center text-xs md:text-sm mt-2">
      We take your privacy and the privacy of everyone whose data we hold extremely seriously. You can find our privacy policy 
      <a href="#privacy-policy" className="text-black-900 hover:text-black-80000"> here.</a>
    </p>
  </div>
</footer>

    </div>
  );
}


