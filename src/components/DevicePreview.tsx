
import React from 'react';
import { DeviceFrame } from './DeviceFrame';

interface DevicePreviewProps {
  url: string;
}

export const DevicePreview = ({ url }: DevicePreviewProps) => {
  return (
    <div className="w-full">
      {/* All devices in one responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center max-w-7xl mx-auto">
        {/* Desktop */}
        <div className="order-1 xl:order-1">
          <DeviceFrame
            type="desktop"
            url={url}
            deviceName="شاشة سطح المكتب"
            width={1920}
            height={1080}
          />
        </div>
        
        {/* Laptop */}
        <div className="order-2 xl:order-2">
          <DeviceFrame
            type="laptop"
            url={url}
            deviceName="MacBook Pro"
            width={1280}
            height={800}
          />
        </div>

        {/* iPad */}
        <div className="order-3 xl:order-3">
          <DeviceFrame
            type="tablet"
            url={url}
            deviceName="iPad"
            width={768}
            height={1024}
          />
        </div>
        
        {/* iPhone 15 Pro */}
        <div className="order-4 xl:order-4">
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
  );
};
