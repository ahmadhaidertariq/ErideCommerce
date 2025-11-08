import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiCheck, FiTrendingUp, FiUsers, FiTarget, FiAward } from 'react-icons/fi';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  const services = [
    {
      icon: <FiTarget size={32} />,
      title: 'Amazon FBA Private Label',
      description: 'Complete private label solutions from product research to launch and optimization.',
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Wholesale Management',
      description: 'Strategic wholesale operations to maximize your Amazon presence and profitability.',
    },
    {
      icon: <FiUsers size={32} />,
      title: 'PPC Management',
      description: 'Data-driven PPC campaigns that reduce ACOS while increasing sales and ROI.',
    },
    {
      icon: <FiAward size={32} />,
      title: 'Brand Management',
      description: 'Comprehensive brand strategy and optimization to dominate your category.',
    },
  ];

  const metrics = [
    { value: '163%', label: 'Average Revenue Growth', color: 'text-green-600' },
    { value: '70%', label: 'Cost Reduction', color: 'text-blue-600' },
    { value: '91%', label: 'Client Retention Rate', color: 'text-purple-600' },
    { value: '4.7x', label: 'Average ROAS', color: 'text-orange-600' },
  ];

  const benefits = [
    'Exponential revenue growth',
    '70% reduction in operational costs',
    '90% elimination of operational stress',
    'Effortless agency scaling',
    'Proven track record with top brands',
    'Dedicated account management',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #003d82, #1a3a6d, #ff6b35)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Scale Your Amazon Business 
              <span className="block bg-gradient-to- from-accent-300 to-yellow-300 bg-clip-text">
                with Expert Management
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Helping Amazon brands achieve consistent growth through Private Label & Wholesale Management, 
              PPC optimization, and strategic brand development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Started Today
              </Link>
              <Link href="/case-studies" className="btn-secondary border-white text-white hover:bg-white/10" style={{ backgroundColor: 'transparent' }}>
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-container bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive Amazon solutions designed to drive growth and maximize profitability
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card text-center group hover:border-primary-200 transition-colors">
              <div className="text-primary-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-primary-600 font-semibold hover:text-primary-700 flex items-center justify-center space-x-1"
              >
                <span>Learn More</span>
                <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              Why Choose Eridecommerce?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We offer turn-key Amazon solutions that seamlessly integrate into your business, 
              handling every aspect from A to Z while you focus on scaling and growth.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                    <FiCheck className="text-primary-600" size={16} />
                  </div>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Schedule a Call</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
              alt="Amazon Business Growth"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Proven Process</h2>
          <p className="section-subtitle">
            A strategic approach that drives exponential growth for your Amazon brand
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Audit',
              description: 'Comprehensive analysis of your current performance, identifying strengths and opportunities for growth.',
            },
            {
              step: '02',
              title: 'Optimize',
              description: 'Fine-tune listings, SEO, and creatives to maximize conversion rates and organic visibility.',
            },
            {
              step: '03',
              title: 'Invest',
              description: 'Eliminate wasted ad spend and reallocate budget to high-performing, scalable opportunities.',
            },
            {
              step: '04',
              title: 'Scale',
              description: 'Rapid growth through strategic scaling of top performers, typically seeing 27%+ increase in 45 days.',
            },
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="card h-full">
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Amazon Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join hundreds of brands that have transformed their Amazon presence with our expert management.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center space-x-2">
            <span>Get Started Today</span>
            <FiArrowRight />
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}




