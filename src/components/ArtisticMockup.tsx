
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

      {/* Screenshot-Ready Mockup Container */}
      <div className="relative mx-auto" style={{ maxWidth: '1200px' }}>
        {/* Clean Neutral Background */}
        <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-16 overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-3xl"></div>
          </div>

          {/* Device Layout Container */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            
            {/* Laptop - Background Layer (Center-Left) */}
            <div className="absolute z-10 transform -translate-x-16">
              <MockupDeviceFrame
                type="laptop"
                url={url}
                deviceName="MacBook Pro"
                width={1280}
                height={800}
                scale={0.35}
              />
            </div>

            {/* Tablet - Middle Layer (Center-Right with rotation) */}
            <div className="absolute z-20 transform translate-x-20 translate-y-8 rotate-6">
              <MockupDeviceFrame
                type="tablet"
                url={url}
                deviceName="iPad Pro"
                width={768}
                height={1024}
                scale={0.32}
              />
            </div>

            {/* Mobile - Front Layer (Front-Center with counter-rotation) */}
            <div className="absolute z-30 transform translate-x-4 -translate-y-4 -rotate-3">
              <MockupDeviceFrame
                type="mobile"
                url={url}
                deviceName="iPhone 15 Pro"
                width={420}
                height={912}
                scale={0.42}
              />
            </div>

          </div>
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
