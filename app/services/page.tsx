import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiCheck, FiTrendingUp, FiBox, FiShoppingCart, FiTarget, FiAward, FiBarChart, FiFileText } from 'react-icons/fi';
import Newsletter from '@/components/Newsletter';

export default function Services() {
  const mainServices = [
    {
      icon: <FiBox size={48} />,
      title: 'Amazon FBA Private Label',
      description: 'Complete end-to-end private label solutions for Amazon sellers. From product research and sourcing to launch strategy and ongoing optimization.',
      features: [
        'Product research and selection',
        'Supplier sourcing and negotiation',
        'Listing creation and optimization',
        'Brand registry setup',
        'Launch strategy and execution',
        'Ongoing management and optimization',
      ],
      image: 'https://images.unsplash.com/photo-1604719312566-8912a92247c3?w=800',
    },
    {
      icon: <FiShoppingCart size={48} />,
      title: 'Wholesale Management',
      description: 'Strategic wholesale operations to maximize your Amazon presence, increase sales velocity, and improve profitability.',
      features: [
        'Wholesale account management',
        'Inventory planning and forecasting',
        'Pricing strategy optimization',
        'Relationship management with suppliers',
        'Profit margin optimization',
        'Scalable growth strategies',
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    },
    {
      icon: <FiTarget size={48} />,
      title: 'PPC Management',
      description: 'Data-driven Amazon PPC campaigns that reduce ACOS while increasing sales, ROI, and overall profitability.',
      features: [
        'Campaign strategy and setup',
        'Keyword research and optimization',
        'Bid management and budget allocation',
        'ACOS optimization',
        'ROAS improvement',
        'Continuous testing and optimization',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
      icon: <FiAward size={48} />,
      title: 'Brand Management',
      description: 'Comprehensive brand strategy and optimization to dominate your category and build long-term brand equity.',
      features: [
        'Brand positioning and strategy',
        'Listing optimization across all products',
        'Content creation (A+ Content, Brand Story)',
        'Review management and reputation',
        'Competitive analysis and monitoring',
        'Brand protection and enforcement',
      ],
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800',
    },
  ];

  const additionalServices = [
    {
      icon: <FiBarChart size={32} />,
      title: 'Listing Optimization',
      description: 'SEO-optimized listings that rank higher and convert better.',
    },
    {
      icon: <FiFileText size={32} />,
      title: 'Account Health Management',
      description: 'Proactive monitoring and management to maintain perfect account health.',
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Inventory Management',
      description: 'Strategic inventory planning to avoid stockouts and minimize storage costs.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500 text-white py-20 lg:py-32" style={{ background: 'linear-gradient(135deg, #003d82, #1a3a6d, #ff6b35)' }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Comprehensive Amazon solutions designed to drive growth, maximize profitability, 
              and eliminate operational complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-container">
        <div className="space-y-24">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                        <FiCheck className="text-primary-600" size={14} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>Get Started</span>
                  <FiArrowRight />
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title">Additional Services</h2>
          <p className="section-subtitle">
            Additional services to support your Amazon business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div key={index} className="card">
              <div className="text-primary-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            A streamlined process that delivers results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'Discovery',
              description: 'We analyze your current Amazon performance, goals, and challenges.',
            },
            {
              step: '2',
              title: 'Strategy',
              description: 'We develop a customized strategy tailored to your specific needs.',
            },
            {
              step: '3',
              title: 'Implementation',
              description: 'Our team executes the strategy with precision and expertise.',
            },
            {
              step: '4',
              title: 'Optimization',
              description: 'Continuous monitoring and optimization to maximize results.',
            },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Amazon Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center space-x-2">
            <span>Schedule a Consultation</span>
            <FiArrowRight />
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}






