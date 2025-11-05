'use client';

import Image from 'next/image';
import { FiTrendingUp, FiTrendingDown, FiArrowRight } from 'react-icons/fi';

interface CaseStudyProps {
  caseStudy: {
    id: number;
    clientName: string;
    industry: string;
    duration: string;
    before: {
      image: string;
      monthlyRevenue: number;
      profitMargin: number;
      acos: number;
      conversionRate: number;
      organicRank: number;
    };
    after: {
      image: string;
      monthlyRevenue: number;
      profitMargin: number;
      acos: number;
      conversionRate: number;
      organicRank: number;
    };
    highlights: string[];
  };
}

export default function CaseStudyCard({ caseStudy }: CaseStudyProps) {
  const revenueIncrease = (
    ((caseStudy.after.monthlyRevenue - caseStudy.before.monthlyRevenue) /
      caseStudy.before.monthlyRevenue) *
    100
  ).toFixed(0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="card group hover:scale-105 transition-transform duration-300">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{caseStudy.clientName}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {caseStudy.industry}
          </span>
        </div>
        <p className="text-sm text-gray-500">Duration: {caseStudy.duration}</p>
      </div>

      {/* Before & After Images */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden mb-2">
            <Image
              src={caseStudy.before.image}
              alt="Before"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-gray-600 text-center font-medium">Before</p>
        </div>
        <div>
          <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden mb-2">
            <Image
              src={caseStudy.after.image}
              alt="After"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-gray-600 text-center font-medium">After</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <span className="text-sm font-medium text-gray-700">Monthly Revenue</span>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-green-600">
                {formatCurrency(caseStudy.after.monthlyRevenue)}
              </span>
              <FiTrendingUp className="text-green-600" />
            </div>
            <p className="text-xs text-gray-500">
              From {formatCurrency(caseStudy.before.monthlyRevenue)} (+{revenueIncrease}%)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Profit Margin</p>
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold text-blue-600">
                {caseStudy.after.profitMargin}%
              </span>
              <FiTrendingUp className="text-blue-600" size={16} />
            </div>
            <p className="text-xs text-gray-500">
              From {caseStudy.before.profitMargin}%
            </p>
          </div>

          <div className="p-3 bg-purple-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">ACOS</p>
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold text-purple-600">
                {caseStudy.after.acos}%
              </span>
              <FiTrendingDown className="text-purple-600" size={16} />
            </div>
            <p className="text-xs text-gray-500">
              From {caseStudy.before.acos}%
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-orange-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Conversion Rate</p>
            <span className="text-lg font-bold text-orange-600">
              {caseStudy.after.conversionRate}%
            </span>
            <p className="text-xs text-gray-500">
              From {caseStudy.before.conversionRate}%
            </p>
          </div>

          <div className="p-3 bg-indigo-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Organic Rank</p>
            <span className="text-lg font-bold text-indigo-600">
              #{caseStudy.after.organicRank}
            </span>
            <p className="text-xs text-gray-500">
              From #{caseStudy.before.organicRank}
            </p>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
        <ul className="space-y-1">
          {caseStudy.highlights.map((highlight, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
              <FiArrowRight className="text-primary-600" size={14} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}





