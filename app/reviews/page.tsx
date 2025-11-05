import Newsletter from '@/components/Newsletter';
import { FiStar } from 'react-icons/fi';

export default function Reviews() {
  const reviews = [
    {
      name: 'Mark T.',
      role: 'Product Manufacturer',
      content: 'Since we started working with Eridecommerce, our Amazon sales have been through the roof. They\'ve got the know-how to optimize everything, and their focus on growing our brand is just what we needed.',
      rating: 5,
    },
    {
      name: 'Sarah K.',
      role: 'Amazon Seller',
      content: 'What I love about Eridecommerce is how they\'re always there when we need them. They\'ve boosted our sales big time, and their commitment to our brand\'s growth really shows. We couldn\'t ask for better partners.',
      rating: 5,
    },
    {
      name: 'David L.',
      role: 'Brand Owner',
      content: 'The team at Eridecommerce isn\'t just managing our Amazon store—they\'re helping us win. Their strategies are spot-on, and they\'re genuinely invested in our success. We\'ve seen amazing results.',
      rating: 5,
    },
    {
      name: 'Emily R.',
      role: 'E-commerce Entrepreneur',
      content: 'Partnering with Eridecommerce was the best move we made. They really know their stuff, and their hands-on approach has taken our Amazon sales to the next level. These guys are the real deal.',
      rating: 5,
    },
    {
      name: 'John M.',
      role: 'Amazon Seller',
      content: 'Eridecommerce totally transformed our Amazon game. In just a few months, our sales shot up, and they did it without hurting our profits. They really get what it takes to grow a brand.',
      rating: 5,
    },
    {
      name: 'Lisa M.',
      role: 'Agency Founder',
      content: 'We were dealing with high costs and inefficient processes that were holding us back. Eridecommerce stepped in with practical solutions that helped us cut costs and streamline everything. Now, we\'re in a much better position to grow.',
      rating: 5,
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500 text-white py-20 lg:py-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Client Reviews
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              See what our clients have to say about working with Eridecommerce.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="card">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">&ldquo;{review.content}&rdquo;</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}





