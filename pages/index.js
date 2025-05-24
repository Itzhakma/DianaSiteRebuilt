import Head from 'next/head';

export default function Home() { return ( <> <Head> <title>Diana Studios – Private Label Revolution</title> <meta name="description" content="We help influencers build their own brand from concept to delivery." /> </Head>

<main className="min-h-screen bg-gradient-to-br from-white to-gray-100 font-sans">
    <section className="max-w-5xl mx-auto text-center py-16 px-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Diana Studios
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Revolutionizing Private Label Products for Influencers
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-2xl shadow-md transition">
        Join the Movement
      </button>
    </section>

    <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16 px-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src="/images/brand-creation.jpg" alt="Brand Creation" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Brand Creation</h3>
          <p className="text-gray-600">
            From logo to packaging – we craft the brand around your persona.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src="/images/production.jpg" alt="Production & Sourcing" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Production & Sourcing</h3>
          <p className="text-gray-600">
            Partnered with trusted Chinese manufacturers, optimized for cost & quality.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src="/images/ecommerce.jpg" alt="E-commerce & Fulfillment" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">E-commerce & Fulfillment</h3>
          <p className="text-gray-600">
            We build, manage, and ship your store. Focus only on your followers.
          </p>
        </div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto mt-24 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="/images/gallery1.jpg" alt="Gallery 1" className="rounded-xl shadow-sm object-cover" />
        <img src="/images/gallery2.jpg" alt="Gallery 2" className="rounded-xl shadow-sm object-cover" />
        <img src="/images/gallery3.jpg" alt="Gallery 3" className="rounded-xl shadow-sm object-cover" />
        <img src="/images/gallery4.jpg" alt="Gallery 4" className="rounded-xl shadow-sm object-cover" />
      </div>
    </section>

    <footer className="text-center text-sm text-gray-500 mt-24 pb-8">
      &copy; {new Date().getFullYear()} Diana Studios. All rights reserved.
    </footer>
  </main>
</>

); }

