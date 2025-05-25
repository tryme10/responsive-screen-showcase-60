
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
    // Force iframe reload by changing key
    const iframe = document.getElementById(`iframe-${type}`) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const getDeviceStyles = () => {
    switch (type) {
      case 'mobile':
        return {
          container: 'bg-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-[280px]',
          screen: 'rounded-[2.5rem] overflow-hidden bg-white',
          scale: 'scale-75 sm:scale-90',
          aspectRatio: '375/812'
        };
      case 'tablet':
        return {
          container: 'bg-gray-800 rounded-3xl p-4 shadow-2xl max-w-[400px]',
          screen: 'rounded-2xl overflow-hidden bg-white',
          scale: 'scale-50 sm:scale-75',
          aspectRatio: '768/1024'
        };
      case 'laptop':
        return {
          container: 'bg-gray-800 rounded-2xl p-2 pb-8 shadow-2xl max-w-[800px]',
          screen: 'rounded-xl overflow-hidden bg-white',
          scale: 'scale-40 sm:scale-60 lg:scale-75',
          aspectRatio: '1280/800'
        };
      case 'desktop':
        return {
          container: 'bg-gray-900 rounded-xl p-4 shadow-2xl max-w-[900px]',
          screen: 'rounded-lg overflow-hidden bg-white',
          scale: 'scale-30 sm:scale-50 lg:scale-60',
          aspectRatio: '1920/1080'
        };
      default:
        return {
          container: 'bg-gray-800 rounded-xl p-2 shadow-xl',
          screen: 'rounded-lg overflow-hidden bg-white',
          scale: 'scale-75',
          aspectRatio: '16/9'
        };
    }
  };

  const styles = getDeviceStyles();

  return (
    <div className="text-center">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{deviceName}</h3>
        <div className="flex justify-center gap-2">
          <span className="text-sm text-gray-500">{width} × {height}</span>
          <button
            onClick={handleRefresh}
            className="text-blue-600 hover:text-blue-800 transition-colors"
            title="تحديث"
          >
            <RefreshCw size={16} />
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
            title="فتح في نافذة جديدة"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className={`${styles.container} ${styles.scale} mx-auto relative transform-gpu transition-transform hover:scale-105`}>
        {/* Device notch for mobile */}
        {type === 'mobile' && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
        )}
        
        {/* Home indicator for mobile */}
        {type === 'mobile' && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
        )}

        <div className={styles.screen} style={{ aspectRatio: styles.aspectRatio }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
              <div className="text-center">
                <RefreshCw className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-2" />
                <p className="text-gray-600">جاري التحميل...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-50 z-20">
              <div className="text-center p-4">
                <p className="text-red-600 mb-2">خطأ في التحميل</p>
                <button
                  onClick={handleRefresh}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  إعادة المحاولة
                </button>
              </div>
            </div>
          )}

          <iframe
            id={`iframe-${type}`}
            src={url}
            className="w-full h-full border-0"
            onLoad={handleLoad}
            onError={handleError}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
            loading="lazy"
            title={`${deviceName} Preview`}
          />
        </div>
      </div>
    </div>
  );
};
