
import React from 'react';
import { DeviceFrame } from './DeviceFrame';

interface DevicePreviewProps {
  url: string;
}

export const DevicePreview = ({ url }: DevicePreviewProps) => {
  return (
    <div className="space-y-16">
      {/* Mobile and Tablet Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 justify-items-center">
        {/* iPhone 15 Pro */}
        <div className="flex justify-center">
          <DeviceFrame
            type="mobile"
            url={url}
            deviceName="iPhone 15 Pro"
            width={420}
            height={912}
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
