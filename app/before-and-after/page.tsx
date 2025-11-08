import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import caseStudiesData from '@/data/caseStudies.json';
import Newsletter from '@/components/Newsletter';

export default function BeforeAndAfter() {
  const caseStudies = caseStudiesData.caseStudies;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateImprovement = (before: number, after: number) => {
    return (((after - before) / before) * 100).toFixed(0);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="before-after-hero">
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Before & After Results
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto' }}>
            Real transformations from real brands. See the measurable impact we've delivered across different categories.
          </p>
        </div>
      </section>

      {/* Before & After Grid */}
      <section className="section-container">
        <div className="container">
          <div className="before-after-grid">
            {caseStudies.map((study) => {
              const revenueIncrease = calculateImprovement(study.before.monthlyRevenue, study.after.monthlyRevenue);
              const profitIncrease = calculateImprovement(study.before.profitMargin, study.after.profitMargin);
              const acosDecrease = calculateImprovement(study.after.acos, study.before.acos);

              return (
                <div key={study.id} className="comparison-card">
                  <div className="comparison-header">
                    <h3 className="comparison-title">{study.clientName}</h3>
                    <span className="comparison-category">{study.industry}</span>
                  </div>
                  <div className="comparison-images">
                    <div className="comparison-img-wrapper">
                      <Image
                        src={study.before.image}
                        alt="Before"
                        width={400}
                        height={300}
                        className="comparison-img"
                      />
                      <span className="comparison-label">Before</span>
                    </div>
                    <div className="comparison-divider"></div>
                    <div className="comparison-img-wrapper">
                      <Image
                        src={study.after.image}
                        alt="After"
                        width={400}
                        height={300}
                        className="comparison-img"
                      />
                      <span className="comparison-label">After</span>
                    </div>
                  </div>
                  <div className="comparison-stats">
                    <div className="stat-row">
                      <span className="stat-label">Monthly Revenue</span>
                      <div className="stat-values">
                        <span className="stat-before">{formatCurrency(study.before.monthlyRevenue)}</span>
                        <span className="stat-after" style={{ color: '#003d82' }}>
                          {formatCurrency(study.after.monthlyRevenue)}
                        </span>
                        <span className="stat-improvement positive">+{revenueIncrease}%</span>
                      </div>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Profit Margin</span>
                      <div className="stat-values">
                        <span className="stat-before">{study.before.profitMargin}%</span>
                        <span className="stat-after" style={{ color: '#ff6b35' }}>
                          {study.after.profitMargin}%
                        </span>
                        <span className="stat-improvement positive">+{profitIncrease}%</span>
                      </div>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">ACOS</span>
                      <div className="stat-values">
                        <span className="stat-before">{study.before.acos}%</span>
                        <span className="stat-after" style={{ color: '#ff6b35' }}>
                          {study.after.acos}%
                        </span>
                        <span className="stat-improvement positive">-{acosDecrease}%</span>
                      </div>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Organic Rank</span>
                      <div className="stat-values">
                        <span className="stat-before">#{study.before.organicRank}</span>
                        <span className="stat-after" style={{ color: '#003d82' }}>
                          #{study.after.organicRank}
                        </span>
                        <span className="stat-improvement positive">Improved</span>
                      </div>
                    </div>
                  </div>
                  <div className="comparison-footer">
                    <Link href={`/case-studies#${study.slug}`} className="comparison-link">
                      View Full Case Study <FiArrowRight />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics Summary */}
      <section className="metrics-summary">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'var(--gray-900)' }}>Average Results</h2>
          </div>
          <div className="metrics-summary-grid">
            <div className="metric-summary-card">
              <div className="metric-summary-value" style={{ color: '#003d82' }}>163%</div>
              <div className="metric-summary-label">Revenue Growth</div>
            </div>
            <div className="metric-summary-card">
              <div className="metric-summary-value" style={{ color: '#ff6b35' }}>70%</div>
              <div className="metric-summary-label">Cost Reduction</div>
            </div>
            <div className="metric-summary-card">
              <div className="metric-summary-value" style={{ color: '#003d82' }}>91%</div>
              <div className="metric-summary-label">Client Retention</div>
            </div>
            <div className="metric-summary-card">
              <div className="metric-summary-value" style={{ color: '#ff6b35' }}>4.7x</div>
              <div className="metric-summary-label">Average ROAS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Amazon Business?</h2>
          <p>Join these brands in achieving exceptional growth and profitability.</p>
          <Link href="/contact" className="btn-primary">Get Started Today</Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

