"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";
import { track } from "@/lib/analytics";

export function ROICalculator() {
  const [roiInputs, setRoiInputs] = useState({
    documentsPerMonth: 1000,
    employeeCostPerHour: 500,
    minutesPerDocument: 5,
  });

  const calculateROI = () => {
    const { documentsPerMonth, employeeCostPerHour, minutesPerDocument } = roiInputs;
    const hoursSavedPerMonth = (documentsPerMonth * minutesPerDocument * 0.85) / 60;
    const costSavedPerMonth = hoursSavedPerMonth * employeeCostPerHour;
    const annualSavings = costSavedPerMonth * 12;
    const roi = ((annualSavings - (9999 * 12)) / (9999 * 12)) * 100;

    return {
      hoursSavedPerMonth: hoursSavedPerMonth.toFixed(1),
      costSavedPerMonth: costSavedPerMonth.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      roi: roi.toFixed(0),
    };
  };

  const roi = calculateROI();

  const handleInputChange = (field: keyof typeof roiInputs, value: number) => {
    setRoiInputs(prev => ({ ...prev, [field]: value }));
    track.roiCalculator({ [field]: value });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Calculator className="mx-auto text-blue-600 mb-4" size={48} />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your ROI</h2>
          <p className="text-gray-600">See how much time and money you can save with Nulfinity</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Documents per Month
              </label>
              <input
                type="number"
                value={roiInputs.documentsPerMonth}
                onChange={(e) => handleInputChange('documentsPerMonth', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employee Cost per Hour (₹)
              </label>
              <input
                type="number"
                value={roiInputs.employeeCostPerHour}
                onChange={(e) => handleInputChange('employeeCostPerHour', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minutes per Document
              </label>
              <input
                type="number"
                value={roiInputs.minutesPerDocument}
                onChange={(e) => handleInputChange('minutesPerDocument', parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{roi.hoursSavedPerMonth}</p>
              <p className="text-sm text-gray-600">Hours Saved/Month</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">₹{roi.costSavedPerMonth}</p>
              <p className="text-sm text-gray-600">Cost Saved/Month</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">₹{roi.annualSavings}</p>
              <p className="text-sm text-gray-600">Annual Savings</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{roi.roi}%</p>
              <p className="text-sm text-gray-600">ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
