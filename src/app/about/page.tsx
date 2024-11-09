import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">About DigitalBoost</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At DigitalBoost, our mission is to empower businesses of all sizes to thrive in the digital landscape. We believe that every company deserves a strong online presence, and we&apos;re here to make that a reality.
          </p>
          <p className="text-gray-600">
            Through innovative strategies, cutting-edge technologies, and a passion for digital marketing, we help our clients achieve their goals and reach new heights in their industries.
          </p>
        </div>
        <Image src="/img/content.jpeg?height=400&width=600" alt="DigitalBoost Team" width={600} height={400} className="rounded-lg shadow-md" />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Innovation', 'Integrity', 'Client Success'].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">{value}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['John Doe', 'Jane Smith', 'Mike Johnson', 'Emily Brown'].map((member, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-2">{member}</h3>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}