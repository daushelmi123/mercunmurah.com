
import React from 'react';
import { Sparkles } from 'lucide-react';

interface FestivalCardProps {
  name: string;
  description: string;
  image?: string;
  featured?: boolean;
}

const FestivalCard: React.FC<FestivalCardProps> = ({ 
  name, 
  description, 
  image, 
  featured = false 
}) => {
  return (
    <div className={`festival-card group cursor-pointer p-4 sm:p-6 ${featured ? 'ring-2 ring-red-500' : ''}`}>
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:animate-sparkle">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
            {name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
          {featured && (
            <div className="mt-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white">
                Popular Choice
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FestivalCard;
