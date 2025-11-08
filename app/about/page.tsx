import Image from 'next/image';
import { FiUsers, FiTarget, FiAward, FiTrendingUp } from 'react-icons/fi';
import Newsletter from '@/components/Newsletter';

export default function About() {
  const values = [
    {
      icon: <FiTarget size={40} />,
      title: 'Results-Driven',
      description: 'We measure success by your growth metrics, not just activity. Every strategy is designed to drive measurable ROI.',
    },
    {
      icon: <FiUsers size={40} />,
      title: 'Client-First',
      description: 'Your success is our success. We\'re obsessed with client retention and maximizing the lifetime value of every partnership.',
    },
    {
      icon: <FiAward size={40} />,
      title: 'Proven Expertise',
      description: 'Years of experience managing Amazon brands across multiple categories, with a track record of consistent results.',
    },
    {
      icon: <FiTrendingUp size={40} />,
      title: 'Continuous Innovation',
      description: 'We stay ahead of Amazon\'s ever-changing landscape, implementing the latest strategies and technologies.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Brands Managed' },
    { number: '91%', label: 'Client Retention Rate' },
    { number: '163%', label: 'Avg Revenue Growth' },
    { number: '4.7x', label: 'Average ROAS' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500 text-white py-20 lg:py-32" style={{ background: 'linear-gradient(135deg, #003d82, #1a3a6d, #ff6b35)' }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Eridecommerce
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Empowering Amazon brands to achieve sustainable growth through expert management and strategic innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className='slide-in-from-left animate'>
            <h2 className="section-title">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Eridecommerce was founded with a simple mission: to help Amazon sellers and brands 
                scale profitably without the operational headaches that come with managing complex 
                Amazon operations in-house.
              </p>
              <p>
                We recognized that many successful Amazon sellers and consultants want to launch 
                or scale their agencies, but they're bogged down by operations—leaving little time 
                for sales, expansion, and strategic growth.
              </p>
              <p>
                That's where we step in. We offer B2B Amazon solutions that seamlessly integrate 
                into your team, handling every aspect of your projects—from A to Z—while you focus 
                on what you do best: building relationships and growing your agency.
              </p>
              <p>
                Today, we're proud to partner with agencies and brands, helping them achieve 
                consistent growth, reduce costs, and eliminate operational stress while scaling 
                their businesses effortlessly.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl slide-in-from-right animate">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle text-center" style={{ margin: '30px auto' }}>
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card text-center">
              <div className="text-primary-600 mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To be the most trusted partner for Amazon agencies and brands, delivering exceptional 
            results that drive sustainable growth while eliminating operational complexity. We believe 
            in building long-term partnerships based on transparency, results, and mutual success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                Clear communication and honest reporting on all metrics and performance.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Commitment to delivering best-in-class service and results every time.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We're not just a service provider—we're your growth partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}






