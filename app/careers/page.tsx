import Newsletter from '@/components/Newsletter';

export default function Careers() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500 text-white py-20 lg:py-32" style={{ background: 'linear-gradient(135deg, #003d82, #1a3a6d, #ff6b35)' }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Careers
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Join our team and help Amazon brands achieve extraordinary growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">We're Growing!</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for talented individuals who are passionate about helping 
            Amazon sellers succeed. Check back soon for open positions, or send us your resume 
            at <a href="mailto:info@eridecommerce.com" className="text-primary-600 hover:underline">info@eridecommerce.com</a>.
          </p>
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
            <ul className="text-left space-y-3 text-gray-700 max-w-md mx-auto">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                Work with top Amazon brands
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                Competitive compensation
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                Remote-friendly environment
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                Continuous learning opportunities
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}






