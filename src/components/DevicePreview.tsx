
import React from 'react';
import { DeviceFrame } from './DeviceFrame';

interface DevicePreviewProps {
  url: string;
}

export const DevicePreview = ({ url }: DevicePreviewProps) => {
  return (
    <div className="space-y-12">
      {/* Mobile and Tablet Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* iPhone 15 Pro */}
        <div className="flex justify-center">
          <DeviceFrame
            type="mobile"
            url={url}
            deviceName="iPhone 15 Pro"
            width={375}
            height={812}
          />
        </div>
        
        {/* iPad */}
        <div className="flex justify-center">
          <DeviceFrame
            type="tablet"
            url={url}
            deviceName="iPad"
            width={768}
            height={1024}
          />
        </div>
      </div>

      {/* Laptop Row */}
      <div className="flex justify-center">
        <DeviceFrame
          type="laptop"
          url={url}
          deviceName="MacBook Pro"
          width={1280}
          height={800}
        />
      </div>

      {/* Desktop Row */}
      <div className="flex justify-center">
        <DeviceFrame
          type="desktop"
          url={url}
          deviceName="شاشة سطح المكتب"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};
