
import React, { useState } from 'react';
import { UrlInput } from '../components/UrlInput';
import { DevicePreview } from '../components/DevicePreview';
import { Smartphone, Tablet, Laptop, Monitor, Zap, Eye, Shield } from 'lucide-react';

const Index = () => {
  const [url, setUrl] = useState('https://hebat-east-web-app.vercel.app/');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 lg:py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              Am I Responsive?
            </h1>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              أداة مجانية لمعاينة المواقع على جميع الأجهزة في وقت واحد
            </p>
            
            {/* Device Icons */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-400">
              <div className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors">
                  <Monitor size={24} className="group-hover:text-blue-600 transition-colors" />
                </div>
                <span className="text-sm font-medium">Desktop</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-full bg-gray-100 group-hover:bg-purple-100 transition-colors">
                  <Laptop size={24} className="group-hover:text-purple-600 transition-colors" />
                </div>
                <span className="text-sm font-medium">Laptop</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-full bg-gray-100 group-hover:bg-green-100 transition-colors">
                  <Tablet size={24} className="group-hover:text-green-600 transition-colors" />
                </div>
                <span className="text-sm font-medium">Tablet</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors">
                  <Smartphone size={24} className="group-hover:text-orange-600 transition-colors" />
                </div>
                <span className="text-sm font-medium">Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* URL Input Section */}
        <div className="mb-16 lg:mb-20">
          <UrlInput url={url} onUrlChange={setUrl} />
        </div>

        {/* Device Preview Section */}
        <DevicePreview url={url} />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 lg:py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <Zap className="text-blue-400" size={20} />
                سريع ومجاني
              </h3>
              <p className="text-gray-300 text-sm">
                معاينة فورية لموقعك على جميع الأجهزة بدون تكلفة
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <Eye className="text-green-400" size={20} />
                دقة عالية
              </h3>
              <p className="text-gray-300 text-sm">
                محاكاة دقيقة لتجربة المستخدم على الأجهزة المختلفة
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                <Shield className="text-purple-400" size={20} />
                آمن وموثوق
              </h3>
              <p className="text-gray-300 text-sm">
                لا نحفظ أي بيانات من موقعك، كل شيء يتم في متصفحك
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Am I Responsive? - أداة مجانية لمطوري الويب
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
