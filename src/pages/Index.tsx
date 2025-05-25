
import React, { useState } from 'react';
import { UrlInput } from '../components/UrlInput';
import { DevicePreview } from '../components/DevicePreview';
import { Smartphone, Tablet, Laptop, Monitor } from 'lucide-react';

const Index = () => {
  const [url, setUrl] = useState('https://hebat-east-web-app.vercel.app/');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Am I Responsive?
            </h1>
            <p className="text-gray-600 text-lg">
              شاهد موقعك على جميع الأجهزة في وقت واحد
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* URL Input Section */}
        <div className="mb-12">
          <UrlInput url={url} onUrlChange={setUrl} />
        </div>

        {/* Device Preview Section */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              معاينة على الأجهزة المختلفة
            </h2>
            <div className="flex justify-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <Smartphone size={20} />
                <span>هاتف</span>
              </div>
              <div className="flex items-center gap-2">
                <Tablet size={20} />
                <span>تابلت</span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop size={20} />
                <span>لاب توب</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor size={20} />
                <span>شاشة كبيرة</span>
              </div>
            </div>
          </div>

          <DevicePreview url={url} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            أداة مجانية لمعاينة المواقع على جميع الأجهزة
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
