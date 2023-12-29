import Head from 'next/head';

export default function Home() {
  const placeholderImageUrl = "https://i.imgur.com/jUXmn02.png";

  return (
    <div className="font-sans bg-white text-gray-800">
      <Head>
        <title>Clear Outcomes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Menu */}
      <header className="shadow-md p-5 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* New logo */}
            <img src="https://i.imgur.com/d4T5lzW.jpg" alt="Clear Outcomes Logo" className="h-10 mr-2" />
            {/* <span className="text-2xl font-semibold text-gray-900">Clear Outcomes</span> */}
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-700 hover:text-green-1000 transition duration-300">About</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-green-1000 transition duration-300">Services</a></li>
              <li><a href="#blog" className="text-gray-700 hover:text-green-1000 transition duration-300">Blog</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-green-1000 transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Section 1: Hero */}
      <section className="flex bg-cover bg-center py-32" style={{ backgroundImage: `url(${placeholderImageUrl})` }}>
        <div className="container mx-auto">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-4">Our mission is to help UK charities demonstrate convincingly the outcomes they achieve.</h1>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">Services</button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Outcomes</h2>
          <p className="mb-10 text-center max-w-2xl mx-auto">Outcomes are the positive differences that charities achieve for the people they support, empower and campaign for.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Secure new or continued funding', 'Keep staff and supporters motivated', 'Be accountable to funders, and to the people they support', 'Understand how best to use their resources', 'Be credible as a campaigning or delivery organisation'].map((point, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center mb-4">
                <img src={placeholderImageUrl} alt="Placeholder" className="mb-3 md:mb-0 md:mr-4 rounded-lg shadow-lg" style={{ width: '150px', height: '100px' }} />
                <p className="flex-grow text-lg">{point}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center max-w-3xl mx-auto">Defining, measuring and reporting outcomes can be challenging - not knowing where to start or what to measure. The language of outcomes can be confusing and jargon-filled. Ethical risks and privacy issues need careful handling. For example, many survey tools store personal data outside the UK or European Union.</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-6 rounded-lg" style={{ width: '300px', height: '225px' }} />
              <p className="text-lg">We have over thirty years’ experience in delivering analytical insights in clear, compelling ways.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-6 rounded-lg" style={{ width: '300px', height: '225px' }} />
              <p className="text-lg">We invest time in listening to our clients and offer an objective, professional approach.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <img src={placeholderImageUrl} alt="Placeholder" className="mx-auto mb-6 rounded-lg" style={{ width: '300px', height: '225px' }} />
              <p className="text-lg">We understand that charities are under severe financial pressures. We aim to be as helpful as we can and our fees are flexible.</p>
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
            <a href="#privacy-policy" className="text-green-600 hover:text-green-800"> here.</a>
          </p>
        </div>
      </footer>
    </div>
  );
}