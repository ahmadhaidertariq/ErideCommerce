import ContactForm from '@/components/ContactForm';
import { FiMail, FiClock } from 'react-icons/fi';
import Newsletter from '@/components/Newsletter';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Ready to scale your Amazon business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we will get back to you within 24 hours. 
              For urgent inquiries, please email us directly at{' '}
              <a href="mailto:info@eridecommerce.com" className="text-primary-600 hover:underline">
                info@eridecommerce.com
              </a>
            </p>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FiMail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:info@eridecommerce.com"
                    className="text-primary-600 hover:underline"
                  >
                    info@eridecommerce.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FiClock className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
              <ol className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'We Review Your Inquiry',
                    description: 'Our team will carefully review your message and business needs.',
                  },
                  {
                    step: '2',
                    title: 'Schedule a Consultation',
                    description: 'We will reach out to schedule a call to discuss your goals in detail.',
                  },
                  {
                    step: '3',
                    title: 'Custom Proposal',
                    description: 'We will provide a tailored proposal based on your specific requirements.',
                  },
                  {
                    step: '4',
                    title: 'Get Started',
                    description: 'Once approved, we will onboard you and begin transforming your Amazon business.',
                  },
                ].map((item) => (
                  <li key={item.step} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-container bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Check out our FAQs page for answers to common questions, or reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/faqs"
              className="btn-secondary inline-block text-center"
            >
              View FAQs
            </a>
            <a
              href="mailto:info@eridecommerce.com"
              className="btn-primary inline-block text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
