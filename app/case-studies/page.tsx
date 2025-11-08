import CaseStudyCard from '@/components/CaseStudyCard';
import caseStudiesData from '@/data/caseStudies.json';
import Newsletter from '@/components/Newsletter';

export default function CaseStudies() {
  const caseStudies = caseStudiesData.caseStudies;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-500 text-white py-20 lg:py-32" style={{ background: 'linear-gradient(135deg, #003d82, #1a3a6d, #ff6b35)' }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case Studies & Results
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Real results from real brands. See how we've helped Amazon sellers achieve 
              exponential growth and maximize profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-container">
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each case study showcases our proven methodology and the measurable impact we've 
            delivered for our clients. All metrics, images, and details can be edited in the 
            case studies data file.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title">Average Results Across All Clients</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '163%', label: 'Revenue Growth', color: 'text-green-600' },
            { value: '70%', label: 'Cost Reduction', color: 'text-blue-600' },
            { value: '91%', label: 'Client Retention', color: 'text-purple-600' },
            { value: '4.7x', label: 'Average ROAS', color: 'text-orange-600' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Note Section */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📝 Editable Case Studies
          </h3>
          <p className="text-gray-700 mb-4">
            All case study data is stored in <code className="bg-blue-100 px-2 py-1 rounded">data/caseStudies.json</code>. 
            You can easily update:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Client names and industries</li>
            <li>Before and after images</li>
            <li>All metrics (revenue, profit margins, ACOS, conversion rates, rankings)</li>
            <li>Duration and highlights</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Simply edit the JSON file with your actual client data and the changes will be reflected 
            throughout the site automatically.
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  );
}






