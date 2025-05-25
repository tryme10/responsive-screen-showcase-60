
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

  const getDeviceConfig = () => {
    switch (type) {
      case 'mobile':
        return {
          // Container styling
          containerClass: 'bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] shadow-2xl relative border-2 border-gray-700',
          screenClass: 'rounded-[2rem] overflow-hidden bg-black relative',
          
          // Target display size (how big the device frame should be)
          targetWidth: 220,
          targetHeight: 440,
          
          // Device frame decorations
          hasNotch: true,
          hasHomeIndicator: true,
          framePadding: 10, // padding around the screen inside the device frame
        };
      case 'tablet':
        return {
          containerClass: 'bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl shadow-2xl relative border border-gray-300',
          screenClass: 'rounded-xl overflow-hidden bg-black shadow-inner',
          targetWidth: 320,
          targetHeight: 420,
          hasHomeIndicator: true,
          framePadding: 16,
        };
      case 'laptop':
        return {
          containerClass: 'bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-2xl rounded-b-3xl shadow-2xl relative border border-gray-400',
          screenClass: 'rounded-lg overflow-hidden bg-black shadow-inner border border-gray-600',
          targetWidth: 450,
          targetHeight: 280,
          hasKeyboard: true,
          framePadding: 12,
        };
      case 'desktop':
        return {
          containerClass: 'bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl relative border border-gray-700',
          screenClass: 'rounded-md overflow-hidden bg-black shadow-inner',
          targetWidth: 550,
          targetHeight: 320,
          hasStand: true,
          framePadding: 16,
        };
      default:
        return {
          containerClass: 'bg-gray-800 rounded-xl shadow-xl',
          screenClass: 'rounded-lg overflow-hidden bg-black',
          targetWidth: 300,
          targetHeight: 200,
          framePadding: 8,
        };
    }
  };

  const config = getDeviceConfig();
  
  // Calculate the available screen space inside the device frame
  const screenWidth = config.targetWidth - (config.framePadding * 2);
  const screenHeight = config.targetHeight - (config.framePadding * 2);
  
  // Calculate scale to fit the viewport inside the screen
  const scaleX = screenWidth / width;
  const scaleY = screenHeight / height;
  const scale = Math.min(scaleX, scaleY);
  
  // Calculate the actual display size of the scaled iframe
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  console.log(`${type} - Target: ${config.targetWidth}x${config.targetHeight}, Screen: ${screenWidth}x${screenHeight}, Viewport: ${width}x${height}, Scale: ${scale}, Final: ${scaledWidth}x${scaledHeight}`);

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
      <div 
        className={`${config.containerClass} transition-all duration-300 hover:scale-105 hover:shadow-3xl`}
        style={{
          width: `${config.targetWidth}px`,
          height: `${config.targetHeight}px`,
          padding: `${config.framePadding}px`,
        }}
      >
        
        {/* Mobile Notch */}
        {config.hasNotch && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-2xl z-10 shadow-lg">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
        )}
        
        {/* Mobile Home Indicator */}
        {config.hasHomeIndicator && type === 'mobile' && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full opacity-80 z-10"></div>
        )}

        {/* iPad Home Indicator */}
        {config.hasHomeIndicator && type === 'tablet' && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full z-10"></div>
        )}

        {/* Laptop Keyboard Base */}
        {config.hasKeyboard && (
          <>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-2xl border border-gray-400"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-400 rounded-sm"></div>
          </>
        )}

        {/* Desktop Stand */}
        {config.hasStand && (
          <>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gray-800 rounded-lg"></div>
          </>
        )}

        {/* Screen Content - exact size to match scaled iframe */}
        <div 
          className={`${config.screenClass} relative`}
          style={{
            width: `${scaledWidth}px`,
            height: `${scaledHeight}px`,
          }}
        >
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

          {/* Iframe with exact scale transformation */}
          <iframe
            id={`iframe-${type}`}
            src={url}
            className="border-0 bg-white absolute top-0 left-0"
            style={{
              width: `${width}px`,
              height: `${height}px`,
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
  );
};
