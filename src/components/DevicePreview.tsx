import React, { useState } from 'react';
import { DeviceFrame } from './DeviceFrame';
import { ArtisticMockup } from './ArtisticMockup';
import { Switch } from './ui/switch';
import { Grid3X3, Layers3 } from 'lucide-react';

interface DevicePreviewProps {
  url: string;
}

export const DevicePreview = ({ url }: DevicePreviewProps) => {
  const [isArtisticView, setIsArtisticView] = useState(false);

  if (isArtisticView) {
    return (
      <div className="w-full">
        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Grid3X3 size={20} />
                <span className="text-sm font-medium">عرض شبكي</span>
              </div>
              
              <Switch
                checked={isArtisticView}
                onCheckedChange={setIsArtisticView}
                className="data-[state=checked]:bg-purple-600"
              />
              
              <div className="flex items-center gap-2 text-purple-600">
                <Layers3 size={20} />
                <span className="text-sm font-medium">عرض فني</span>
              </div>
            </div>
          </div>
        </div>

        <ArtisticMockup url={url} />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* View Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Grid3X3 size={20} />
              <span className="text-sm font-medium">عرض شبكي</span>
            </div>
            
            <Switch
              checked={isArtisticView}
              onCheckedChange={setIsArtisticView}
              className="data-[state=checked]:bg-purple-600"
            />
            
            <div className="flex items-center gap-2 text-gray-600">
              <Layers3 size={20} />
              <span className="text-sm font-medium">عرض فني</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          معاينة مباشرة على جميع الأجهزة
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          شاهد موقعك بكامل تفاصيله
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          اختبر تجربة المستخدم على أجهزة مختلفة واكتشف كيف يبدو موقعك على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر
        </p>
      </div>

      {/* Devices Grid */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl -z-10"></div>
        
        <div className="p-8 lg:p-12">
          {/* Desktop & Laptop Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 justify-items-center mb-12">
            {/* Desktop */}
            <div className="order-1">
              <DeviceFrame
                type="desktop"
                url={url}
                deviceName="شاشة سطح المكتب"
                width={1920}
                height={1080}
              />
            </div>
            
            {/* Laptop */}
            <div className="order-2">
              <DeviceFrame
                type="laptop"
                url={url}
                deviceName="MacBook Pro"
                width={1280}
                height={800}
              />
            </div>
          </div>

          {/* Mobile & Tablet Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
            {/* iPad */}
            <div className="order-1 md:order-1">
              <DeviceFrame
                type="tablet"
                url={url}
                deviceName="iPad Pro"
                width={768}
                height={1024}
              />
            </div>
            
            {/* iPhone */}
            <div className="order-2 md:order-2">
              <DeviceFrame
                type="mobile"
                url={url}
                deviceName="iPhone 15 Pro"
                width={420}
                height={912}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">تصميم متجاوب</h3>
          <p className="text-gray-600 text-sm">اختبر كيف يبدو موقعك على الهواتف الذكية المختلفة</p>
        </div>

        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">معاينة فورية</h3>
          <p className="text-gray-600 text-sm">شاهد التغييرات مباشرة على جميع الأجهزة</p>
        </div>

        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">دقة عالية</h3>
          <p className="text-gray-600 text-sm">محاكاة دقيقة لتجربة المستخدم الحقيقية</p>
        </div>
      </div>
    </div>
  );
};
