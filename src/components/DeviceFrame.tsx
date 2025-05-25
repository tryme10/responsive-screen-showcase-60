
import React, { useState } from 'react';
import { RefreshCw, ExternalLink } from 'lucide-react';

interface DeviceFrameProps {
  type: 'mobile' | 'tablet' | 'laptop' | 'desktop';
  url: string;
  deviceName: string;
  width: number;
  height: number;
}

export const DeviceFrame = ({ type, url, deviceName, width, height }: DeviceFrameProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setError(false);
    const iframe = document.getElementById(`iframe-${type}`) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const getDeviceStyles = () => {
    switch (type) {
      case 'mobile':
        return {
          container: 'bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl relative border-2 border-gray-700',
          screen: 'rounded-[2rem] overflow-hidden bg-black relative',
          containerWidth: 'w-[220px]',
          containerHeight: 'h-[440px]',
          viewportWidth: width,
          viewportHeight: height,
          displayWidth: 200, // 220px - padding
          displayHeight: 420, // 440px - padding
          hasNotch: true,
          hasHomeIndicator: true,
        };
      case 'tablet':
        return {
          container: 'bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl p-4 shadow-2xl relative border border-gray-300',
          screen: 'rounded-xl overflow-hidden bg-black shadow-inner',
          containerWidth: 'w-[320px]',
          containerHeight: 'h-[420px]',
          viewportWidth: width,
          viewportHeight: height,
          displayWidth: 288, // 320px - padding
          displayHeight: 388, // 420px - padding
          hasNotch: false,
          hasHomeIndicator: true,
        };
      case 'laptop':
        return {
          container: 'bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-2xl rounded-b-3xl p-3 pb-8 shadow-2xl relative border border-gray-400',
          screen: 'rounded-lg overflow-hidden bg-black shadow-inner border border-gray-600',
          containerWidth: 'w-[450px]',
          containerHeight: 'h-[280px]',
          viewportWidth: width,
          viewportHeight: height,
          displayWidth: 438, // 450px - padding
          displayHeight: 254, // 280px - padding
          hasNotch: false,
          hasHomeIndicator: false,
          hasKeyboard: true,
        };
      case 'desktop':
        return {
          container: 'bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4 shadow-2xl relative border border-gray-700',
          screen: 'rounded-md overflow-hidden bg-black shadow-inner',
          containerWidth: 'w-[550px]',
          containerHeight: 'h-[320px]',
          viewportWidth: width,
          viewportHeight: height,
          displayWidth: 518, // 550px - padding
          displayHeight: 288, // 320px - padding
          hasNotch: false,
          hasHomeIndicator: false,
          hasStand: true,
        };
      default:
        return {
          container: 'bg-gray-800 rounded-xl p-2 shadow-xl',
          screen: 'rounded-lg overflow-hidden bg-black',
          containerWidth: 'w-[300px]',
          containerHeight: 'h-[200px]',
          viewportWidth: width,
          viewportHeight: height,
          displayWidth: 284,
          displayHeight: 184,
        };
    }
  };

  const styles = getDeviceStyles();
  
  // حساب نسبة التصغير بناء على العرض
  const scaleX = styles.displayWidth / styles.viewportWidth;
  const scaleY = styles.displayHeight / styles.viewportHeight;
  // استخدم أصغر نسبة للحفاظ على النسب الأصلية
  const scale = Math.min(scaleX, scaleY);

  console.log(`${type} - Display: ${styles.displayWidth}x${styles.displayHeight}, Viewport: ${styles.viewportWidth}x${styles.viewportHeight}, Scale: ${scale}`);

  return (
    <div className="flex flex-col items-center group">
      {/* Device Header */}
      <div className="mb-4 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{deviceName}</h3>
        <div className="flex justify-center gap-3 items-center">
          <span className="text-sm text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
            {width} × {height}
          </span>
          <button
            onClick={handleRefresh}
            className="text-blue-600 hover:text-blue-800 transition-colors p-2 hover:bg-blue-50 rounded-lg shadow-sm border border-gray-200"
            title="إعادة تحميل"
          >
            <RefreshCw size={16} />
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors p-2 hover:bg-blue-50 rounded-lg shadow-sm border border-gray-200"
            title="فتح في نافذة جديدة"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Device Container */}
      <div className={`${styles.container} ${styles.containerWidth} ${styles.containerHeight} transition-all duration-300 hover:scale-105 hover:shadow-3xl`}>
        
        {/* Mobile Notch */}
        {styles.hasNotch && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-2xl z-10 shadow-lg">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
        )}
        
        {/* Mobile Home Indicator */}
        {styles.hasHomeIndicator && type === 'mobile' && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full opacity-80 z-10"></div>
        )}

        {/* iPad Home Indicator */}
        {styles.hasHomeIndicator && type === 'tablet' && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full z-10"></div>
        )}

        {/* Laptop Keyboard Base */}
        {styles.hasKeyboard && (
          <>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-2xl border border-gray-400"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-400 rounded-sm"></div>
          </>
        )}

        {/* Desktop Stand */}
        {styles.hasStand && (
          <>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gray-800 rounded-lg"></div>
          </>
        )}

        {/* Screen Content */}
        <div className={`${styles.screen} w-full h-full relative`}>
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-20">
              <div className="text-center">
                <RefreshCw className="w-8 h-8 animate-spin text-blue-400 mx-auto mb-2" />
                <p className="text-gray-300 text-sm">جاري التحميل...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-900 z-20">
              <div className="text-center p-4">
                <p className="text-red-300 mb-2 text-sm">خطأ في التحميل</p>
                <button
                  onClick={handleRefresh}
                  className="text-blue-400 hover:text-blue-300 underline text-sm bg-red-800 px-3 py-1 rounded"
                >
                  إعادة المحاولة
                </button>
              </div>
            </div>
          )}

          {/* الحاوي الذي يحدد المساحة المرئية */}
          <div 
            className="w-full h-full overflow-hidden relative"
            style={{
              width: `${styles.displayWidth}px`,
              height: `${styles.displayHeight}px`,
            }}
          >
            {/* الـ iframe بالحجم الحقيقي مع التصغير */}
            <iframe
              id={`iframe-${type}`}
              src={url}
              className="border-0 bg-white absolute top-0 left-0"
              style={{
                width: `${styles.viewportWidth}px`,
                height: `${styles.viewportHeight}px`,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
              onLoad={handleLoad}
              onError={handleError}
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
              loading="lazy"
              title={`${deviceName} Preview`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
