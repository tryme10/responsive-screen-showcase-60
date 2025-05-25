
import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface MockupDeviceFrameProps {
  type: 'mobile' | 'tablet' | 'laptop';
  url: string;
  deviceName: string;
  width: number;
  height: number;
  scale: number;
}

export const MockupDeviceFrame = ({ type, url, deviceName, width, height, scale }: MockupDeviceFrameProps) => {
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
    const iframe = document.getElementById(`mockup-iframe-${type}`) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const getDeviceConfig = () => {
    switch (type) {
      case 'mobile':
        return {
          containerClass: 'bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] shadow-2xl relative border-2 border-gray-700',
          screenClass: 'rounded-[2rem] overflow-hidden bg-black relative',
          framePadding: 10,
          hasNotch: true,
          hasHomeIndicator: true,
        };
      case 'tablet':
        return {
          containerClass: 'bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl shadow-2xl relative border border-gray-300',
          screenClass: 'rounded-xl overflow-hidden bg-black shadow-inner',
          framePadding: 16,
          hasHomeIndicator: true,
        };
      case 'laptop':
        return {
          containerClass: 'bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-2xl rounded-b-3xl shadow-2xl relative border border-gray-400',
          screenClass: 'rounded-lg overflow-hidden bg-black shadow-inner border border-gray-600',
          framePadding: 12,
          hasKeyboard: true,
        };
      default:
        return {
          containerClass: 'bg-gray-800 rounded-xl shadow-xl',
          screenClass: 'rounded-lg overflow-hidden bg-black',
          framePadding: 8,
        };
    }
  };

  const config = getDeviceConfig();
  
  // Calculate actual display size
  const displayWidth = width * scale;
  const displayHeight = height * scale;
  
  // Add frame padding to get container size
  const containerWidth = displayWidth + (config.framePadding * 2);
  const containerHeight = displayHeight + (config.framePadding * 2);

  return (
    <div className="group hover:scale-105 transition-transform duration-300">
      {/* Device Container */}
      <div 
        className={`${config.containerClass} transition-all duration-300 hover:shadow-3xl`}
        style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
          padding: `${config.framePadding}px`,
        }}
      >
        
        {/* Mobile Notch */}
        {config.hasNotch && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black rounded-b-2xl z-10 shadow-lg">
            <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
          </div>
        )}
        
        {/* Mobile Home Indicator */}
        {config.hasHomeIndicator && type === 'mobile' && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-white rounded-full opacity-80 z-10"></div>
        )}

        {/* iPad Home Indicator */}
        {config.hasHomeIndicator && type === 'tablet' && (
          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gray-600 rounded-full z-10"></div>
        )}

        {/* Laptop Keyboard Base */}
        {config.hasKeyboard && (
          <>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-2xl border border-gray-400"></div>
            <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gray-400 rounded-sm"></div>
          </>
        )}

        {/* Screen Content */}
        <div 
          className={`${config.screenClass} relative`}
          style={{
            width: `${displayWidth}px`,
            height: `${displayHeight}px`,
          }}
        >
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-20">
              <RefreshCw className="w-6 h-6 animate-spin text-blue-400" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-900 z-20">
              <button
                onClick={handleRefresh}
                className="text-red-300 text-xs bg-red-800 px-2 py-1 rounded"
              >
                إعادة المحاولة
              </button>
            </div>
          )}

          {/* Iframe */}
          <iframe
            id={`mockup-iframe-${type}`}
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
            title={`${deviceName} Mockup Preview`}
          />
        </div>

        {/* Device Label (appears on hover) */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">
            {deviceName}
          </span>
        </div>
      </div>
    </div>
  );
};
