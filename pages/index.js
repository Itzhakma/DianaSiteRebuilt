import Head from 'next/head'; import { Button } from '@/components/ui/button'; import { Card, CardContent } from '@/components/ui/card';

export default function Home() { return ( <> <Head> <title>Diana Studios – Private Label Revolution</title> <meta
name="description"
content="We help influencers build their own brand from concept to delivery."
/> </Head>

<main className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6 font-sans">
    <section className="max-w-5xl mx-auto text-center py-16">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        Diana Studios
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Revolutionizing Private Label Products for Influencers
      </p>
      <Button className="text-lg px-6 py-3 rounded-2xl shadow-md">
        Join the Movement
      </Button>
    </section>

    <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">Brand Creation</h3>
          <p className="text-gray-600">
            From logo to packaging – we craft the brand around your persona.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">Production & Sourcing</h3>
          <p className="text-gray-600">
            Partnered with trusted Chinese manufacturers, optimized for cost & quality.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">E-commerce & Fulfillment</h3>
          <p className="text-gray-600">
            We build, manage, and ship your store. Focus only on your followers.
          </p>
        </CardContent>
      </Card>
    </section>

    <footer className="text-center text-sm text-gray-500 mt-24">
      &copy; {new Date().getFullYear()} Diana Studios. All rights reserved.
    </footer>
  </main>
</>

); }

