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
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Scale Your Amazon Business<br />
              <span className="gradient-text">with Expert Management</span>
            </h1>
            <p className="hero-subtitle">
              Helping Amazon brands achieve consistent growth through Private Label & Wholesale Management, PPC optimization, and strategic brand development.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn-primary">Get Started Today</Link>
              <Link href="/case-studies" className="btn-secondary">View Case Studies</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-value" style={{ color: '#003d82' }}>163%</div>
              <div className="metric-label">Average Revenue Growth</div>
            </div>
            <div className="metric-item">
              <div className="metric-value" style={{ color: '#ff6b35' }}>70%</div>
              <div className="metric-label">Cost Reduction</div>
            </div>
            <div className="metric-item">
              <div className="metric-value" style={{ color: '#003d82' }}>91%</div>
              <div className="metric-label">Client Retention Rate</div>
            </div>
            <div className="metric-item">
              <div className="metric-value" style={{ color: '#ff6b35' }}>4.7x</div>
              <div className="metric-label">Average ROAS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive Amazon solutions designed to drive growth and maximize profitability</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="/services" className="service-link">
                  Learn More <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <h2 className="section-title">Why Choose Eridecommerce?</h2>
              <p className="benefits-intro">
                We offer turn-key Amazon solutions that seamlessly integrate into your business, handling every aspect from A to Z while you focus on scaling and growth.
              </p>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <FiCheck className="inline mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">Schedule a Call</Link>
            </div>
            <div className="benefits-image">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                alt="Amazon Business Growth"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Proven Process</h2>
            <p className="section-subtitle">A strategic approach that drives exponential growth for your Amazon brand</p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h3>Audit</h3>
              <p>Comprehensive analysis of your current performance, identifying strengths and opportunities for growth.</p>
            </div>
            <div className="process-card">
              <div className="process-number">02</div>
              <h3>Optimize</h3>
              <p>Fine-tune listings, SEO, and creatives to maximize conversion rates and organic visibility.</p>
            </div>
            <div className="process-card">
              <div className="process-number">03</div>
              <h3>Invest</h3>
              <p>Eliminate wasted ad spend and reallocate budget to high-performing, scalable opportunities.</p>
            </div>
            <div className="process-card">
              <div className="process-number">04</div>
              <h3>Scale</h3>
              <p>Rapid growth through strategic scaling of top performers, typically seeing 27%+ increase in 45 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Scale Your Amazon Business?</h2>
          <p>Join hundreds of brands that have transformed their Amazon presence with our expert management.</p>
          <Link href="/contact" className="btn-primary">Get Started Today</Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
