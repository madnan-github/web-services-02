import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const services = [
    'Search Engine Optimization', 
    'Social Media Marketing', 
    'Content Creation'
  ];

  const serviceImages = [
    '/img/seo.jpg',  
    '/img/social.jpg',
    '/img/content.jpeg'
  ];

  return (
    <div>
      <section className="bg-secondary  text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Boost Your Digital Presence</h1>
          <p className="text-xl mb-8">We help businesses thrive in the digital world with cutting-edge marketing strategies.</p>
          <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">Get Started</Link>
        </div>
      </section>
 
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <Image 
            src={serviceImages[index]} // Access the image path by index
            alt={service} 
            width={350} 
            height={200} 
            className="mb-4" 
          />
          <h3 className="text-xl font-semibold mb-2">{service}</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      ))}
    </div>
          
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Search Engine Optimization', 'Social Media Marketing', 'Content Creation'].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Image src={`/img/seo.jpg?height=200&width=200`} alt={service} width={100} height={100} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Experienced Team', 'Custom Strategies', 'Data-Driven Approach', 'Proven Results'].map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Boost Your Digital Presence?</h2>
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}