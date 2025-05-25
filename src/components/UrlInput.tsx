
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, RefreshCw } from 'lucide-react';

interface UrlInputProps {
  url: string;
  onUrlChange: (url: string) => void;
}

export const UrlInput = ({ url, onUrlChange }: UrlInputProps) => {
  const [inputValue, setInputValue] = useState(url);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Add https:// if not present
    let formattedUrl = inputValue;
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'https://' + formattedUrl;
    }
    
    onUrlChange(formattedUrl);
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    onUrlChange(url);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              أدخل رابط الموقع
            </h3>
            <p className="text-gray-600">
              ضع رابط الموقع الذي تريد معاينته على جميع الأجهزة
            </p>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                type="url"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="https://example.com"
                className="h-12 text-lg border-2 focus:border-blue-500 rounded-xl"
                dir="ltr"
              />
            </div>
            <Button 
              type="submit" 
              className="h-12 px-6 bg-blue-600 hover:bg-blue-700 rounded-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  معاينة
                </>
              )}
            </Button>
            <Button 
              type="button"
              variant="outline"
              onClick={handleRefresh}
              className="h-12 px-4 rounded-xl"
              disabled={isLoading}
            >
              <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
