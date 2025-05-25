
import React from 'react';
import { MockupDeviceFrame } from './MockupDeviceFrame';

interface ArtisticMockupProps {
  url: string;
}

export const ArtisticMockup = ({ url }: ArtisticMockupProps) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          عرض فني متداخل للأجهزة
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          اعرض موقعك بشكل احترافي
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          تخطيط فني أنيق يُظهر موقعك على عدة أجهزة مع تداخل جميل - مثالي لأخذ لقطة شاشة احترافية
        </p>
      </div>

      {/* Artistic Mockup Container */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 rounded-3xl -z-10"></div>
        
        <div className="relative w-full max-w-6xl mx-auto px-8 py-16 overflow-hidden" style={{ minHeight: '600px' }}>
          
          {/* Desktop/Laptop - Background Layer */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
            <MockupDeviceFrame
              type="laptop"
              url={url}
              deviceName="MacBook Pro"
              width={1280}
              height={800}
              scale={0.4}
            />
          </div>

          {/* Tablet - Middle Layer */}
          <div className="absolute top-20 right-8 md:right-16 z-20 transform rotate-12">
            <MockupDeviceFrame
              type="tablet"
              url={url}
              deviceName="iPad Pro"
              width={768}
              height={1024}
              scale={0.35}
            />
          </div>

          {/* Mobile - Front Layer */}
          <div className="absolute top-32 left-8 md:left-24 z-30 transform -rotate-12">
            <MockupDeviceFrame
              type="mobile"
              url={url}
              deviceName="iPhone 15 Pro"
              width={420}
              height={912}
              scale={0.45}
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-12 right-4 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute bottom-12 left-4 w-32 h-32 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-40 blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          جاهز لأخذ لقطة شاشة؟
        </h3>
        <p className="text-gray-600 mb-4">
          استخدم أدوات لقطة الشاشة في متصفحك لحفظ هذا العرض الاحترافي لموقعك
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            تصميم متجاوب
          </span>
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            عرض احترافي
          </span>
          <span className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            جودة عالية
          </span>
        </div>
      </div>
    </div>
  );
};
