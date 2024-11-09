import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility in search engine results and drive organic traffic.',
      image: '/img/seo.jpg'
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage with your audience and build brand awareness through effective social media strategies.',
      image: '/img/social.jpg'
    },
    {
      title: 'Content Creation',
      description: 'Develop compelling content that resonates with your target audience and drives conversions.',
      image: '/img/content.jpeg'
    },
    {
      title: 'Pay-Per-Click Advertising',
      description: 'Maximize your ROI with targeted PPC campaigns across various platforms.',
      image: '/img/paypclick.jpg'
    },
    {
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email marketing campaigns.',
      image: '/img/email.jpg'
    },
    {
      title: 'Analytics and Reporting',
      description: 'Gain valuable insights into your digital marketing performance with comprehensive analytics.',
      image: '/img/analytic.jpeg'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={service.image} alt={service.title} width={300} height={200} className="w-full" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}