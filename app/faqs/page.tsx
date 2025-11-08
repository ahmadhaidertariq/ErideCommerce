import Newsletter from '@/components/Newsletter';

export default function FAQs() {
  const faqs = [
    {
      question: 'What services does Eridecommerce offer?',
      answer: 'We offer comprehensive Amazon management services including Private Label FBA, Wholesale Management, PPC Advertising, Brand Management, Listing Optimization, and Account Health Management.',
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Results vary based on your current performance and goals. Typically, our clients see improvements within 30-45 days, with significant growth often achieved within 3-6 months.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is customized based on your specific needs and the scope of work. Contact us for a free consultation and customized proposal.',
    },
    {
      question: 'Do you work with brands in all Amazon categories?',
      answer: 'Yes, we have experience working across multiple Amazon categories. Our strategies are adapted to fit the unique requirements of each category.',
    },
    {
      question: 'How do you measure success?',
      answer: 'We track key metrics including revenue growth, profit margins, ACOS reduction, conversion rates, organic rankings, and overall account health. Regular reporting ensures transparency.',
    },
    {
      question: 'Can I maintain control of my Amazon account?',
      answer: 'Absolutely. You maintain full ownership and control. We work as an extension of your team, implementing strategies with your approval.',
    },
    {
      question: 'What communication can I expect?',
      answer: 'You\'ll have a dedicated account manager and regular check-ins. We provide detailed monthly reports and are available for urgent matters via email or scheduled calls.',
    },
    {
      question: 'How do you handle account security?',
      answer: 'Security is our top priority. We follow Amazon\'s best practices and use secure communication channels. All team members are trained on account security protocols.',
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500 text-white py-20 lg:py-32" style={{ background: 'linear-gradient(135deg, #003d82, #1a3a6d, #ff6b35)' }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Common questions about our services and process.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Still have questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}






