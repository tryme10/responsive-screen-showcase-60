
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
          container: 'bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl relative',
          screen: 'rounded-[2rem] overflow-hidden bg-white relative',
          containerWidth: '280px',
          containerHeight: '580px',
          iframeWidth: width,
          iframeHeight: height,
          scale: 0.67 // Scale to fit in container
        };
      case 'tablet':
        return {
          container: 'bg-gray-800 rounded-2xl p-3 shadow-2xl relative',
          screen: 'rounded-xl overflow-hidden bg-white',
          containerWidth: '400px',
          containerHeight: '550px',
          iframeWidth: width,
          iframeHeight: height,
          scale: 0.52 // Scale to fit in container
        };
      case 'laptop':
        return {
          container: 'bg-gray-800 rounded-t-2xl rounded-b-3xl p-2 pb-6 shadow-2xl relative',
          screen: 'rounded-lg overflow-hidden bg-white',
          containerWidth: '600px',
          containerHeight: '400px',
          iframeWidth: width,
          iframeHeight: height,
          scale: 0.46 // Scale to fit in container
        };
      case 'desktop':
        return {
          container: 'bg-gray-900 rounded-lg p-3 shadow-2xl relative',
          screen: 'rounded-md overflow-hidden bg-white',
          containerWidth: '700px',
          containerHeight: '420px',
          iframeWidth: width,
          iframeHeight: height,
          scale: 0.36 // Scale to fit in container
        };
      default:
        return {
          container: 'bg-gray-800 rounded-xl p-2 shadow-xl',
          screen: 'rounded-lg overflow-hidden bg-white',
          containerWidth: '400px',
          containerHeight: '300px',
          iframeWidth: width,
          iframeHeight: height,
          scale: 0.5
        };
    }
  };

  const styles = getDeviceStyles();

  return (
    <div className="text-center mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{deviceName}</h3>
        <div className="flex justify-center gap-3 items-center">
          <span className="text-sm text-gray-500 font-mono">{width} × {height}</span>
          <button
            onClick={handleRefresh}
            className="text-blue-600 hover:text-blue-800 transition-colors p-1 hover:bg-blue-50 rounded"
            title="تحديث"
          >
            <RefreshCw size={16} />
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors p-1 hover:bg-blue-50 rounded"
            title="فتح في نافذة جديدة"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div 
        className={`${styles.container} mx-auto transition-transform hover:scale-105`}
        style={{ 
          width: styles.containerWidth, 
          height: styles.containerHeight 
        }}
      >
        {/* Device notch for mobile */}
        {type === 'mobile' && (
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
        )}
        
        {/* Home indicator for mobile */}
        {type === 'mobile' && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full opacity-60"></div>
        )}

        {/* Laptop base */}
        {type === 'laptop' && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gray-700 rounded-b-xl"></div>
        )}

        <div className={`${styles.screen} w-full h-full relative`}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
              <div className="text-center">
                <RefreshCw className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-2" />
                <p className="text-gray-600 text-sm">جاري التحميل...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50 z-20">
              <div className="text-center p-4">
                <p className="text-red-600 mb-2 text-sm">خطأ في التحميل</p>
                <button
                  onClick={handleRefresh}
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  إعادة المحاولة
                </button>
              </div>
            </div>
          )}

          <div 
            className="origin-top-left"
            style={{
              width: `${styles.iframeWidth}px`,
              height: `${styles.iframeHeight}px`,
              transform: `scale(${styles.scale})`,
            }}
          >
            <iframe
              id={`iframe-${type}`}
              src={url}
              className="w-full h-full border-0 bg-white"
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
