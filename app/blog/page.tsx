import Newsletter from '@/components/Newsletter';

export default function Blog() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Insights, strategies, and tips to help you grow your Amazon business.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our blog is under construction. We'll be sharing valuable insights, case studies, 
            and strategies for Amazon sellers. Subscribe to our newsletter to be notified when 
            we launch!
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  );
}





