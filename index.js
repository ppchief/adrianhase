// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // For optimized images

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dr. [Your Name] - Sport Psychologist</title>
        <meta name="description" content="Helping athletes achieve peak performance." />
        {/* Add more meta tags for SEO */}
        <link rel="icon" href="/favicon.ico" /> {/* Customize favicon */}
      </Head>

      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dr. [Your Name]</h1>
          <nav>
            <Link href="/about" className="mr-4 hover:text-blue-200">About</Link>
            <Link href="/services" className="mr-4 hover:text-blue-200">Services</Link>
            <Link href="/blog" className="mr-4 hover:text-blue-200">Blog</Link>
            <Link href="/contact" className="hover:text-blue-200">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="relative h-96"> {/* Hero Image */}
            <Image
              src="/hero-image.jpg" // Replace with your image path
              alt="Sport Psychology Session"
              layout="fill"
              objectFit="cover"
              quality={100} // Adjust quality as needed
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white">Unlock Your Athletic Potential</h2>
            </div>
          </div>
          <p className="mt-4">
            Welcome! I'm Dr. [Your Name], a sport psychologist dedicated to helping athletes of all levels
            improve their mental game and achieve peak performance.  I offer evidence-based strategies
            to enhance focus, manage stress, build confidence, and overcome challenges.
          </p>
          <Link href="/services" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Blog Post Card */}
            <div className="border rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-2">The Power of Visualization</h3>
              <p className="text-gray-700">Learn how visualization techniques can enhance your athletic performance.</p>
              <Link href="/blog/visualization" className="text-blue-500 hover:underline">Read More</Link>
            </div>
            {/* Add more blog post cards here */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Dr. [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}
