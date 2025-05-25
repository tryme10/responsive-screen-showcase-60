
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
          containerWidth: 'w-[200px]',
          containerHeight: 'h-[400px]',
          iframeWidth: width,
          iframeHeight: height,
          scale: 0.45
        };
      case 'tablet':
        return {
          container: 'bg-gray-800 rounded-2xl p-3 shadow-2xl relative',
          screen: 'rounded-xl overflow-hidden bg-white',
          containerWidth: 'w-[280px]',
          containerHeight: 'h-[370px]',
          iframeWidth: width,
          iframeHeight: height,
          scale: 0.35
        };
      case 'laptop':
        return {
          container: 'bg-gray-800 rounded-t-2xl rounded-b-3xl p-2 pb-6 shadow-2xl relative',
          screen: 'rounded-lg overflow-hidden bg-white',
          containerWidth: 'w-[400px]',
          containerHeight: 'h-[250px]',
          iframeWidth: width,
          iframeHeight: height,
          scale: 0.3
        };
      case 'desktop':
        return {
          container: 'bg-gray-900 rounded-lg p-3 shadow-2xl relative',
          screen: 'rounded-md overflow-hidden bg-white',
          containerWidth: 'w-[500px]',
          containerHeight: 'h-[280px]',
          iframeWidth: width,
          iframeHeight: height,
          scale: 0.25
        };
      default:
        return {
          container: 'bg-gray-800 rounded-xl p-2 shadow-xl',
          screen: 'rounded-lg overflow-hidden bg-white',
          containerWidth: 'w-[300px]',
          containerHeight: 'h-[200px]',
          iframeWidth: width,
          iframeHeight: height,
          scale: 0.3
        };
    }
  };

  const styles = getDeviceStyles();

  return (
    <div className="flex flex-col items-center">
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-800 mb-1 text-center">{deviceName}</h3>
        <div className="flex justify-center gap-2 items-center">
          <span className="text-xs text-gray-500 font-mono">{width} × {height}</span>
          <button
            onClick={handleRefresh}
            className="text-blue-600 hover:text-blue-800 transition-colors p-1 hover:bg-blue-50 rounded"
            title="تحديث"
          >
            <RefreshCw size={14} />
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors p-1 hover:bg-blue-50 rounded"
            title="فتح في نافذة جديدة"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className={`${styles.container} ${styles.containerWidth} ${styles.containerHeight} transition-transform hover:scale-105`}>
        {/* Device notch for mobile */}
        {type === 'mobile' && (
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-b-xl z-10"></div>
        )}
        
        {/* Home indicator for mobile */}
        {type === 'mobile' && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full opacity-60"></div>
        )}

        {/* Laptop base */}
        {type === 'laptop' && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gray-700 rounded-b-xl"></div>
        )}

        <div className={`${styles.screen} w-full h-full relative overflow-hidden`}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
              <div className="text-center">
                <RefreshCw className="w-6 h-6 animate-spin text-blue-600 mx-auto mb-1" />
                <p className="text-gray-600 text-xs">جاري التحميل...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50 z-20">
              <div className="text-center p-2">
                <p className="text-red-600 mb-1 text-xs">خطأ في التحميل</p>
                <button
                  onClick={handleRefresh}
                  className="text-blue-600 hover:text-blue-800 underline text-xs"
                >
                  إعادة المحاولة
                </button>
              </div>
            </div>
          )}

          <div className="w-full h-full flex items-center justify-center">
            <iframe
              id={`iframe-${type}`}
              src={url}
              className="border-0 bg-white origin-top-left"
              style={{
                width: `${styles.iframeWidth}px`,
                height: `${styles.iframeHeight}px`,
                transform: `scale(${styles.scale})`,
                transformOrigin: 'top left'
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
