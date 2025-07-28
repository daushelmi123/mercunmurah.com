import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface FlyingCartAnimationProps {
  isVisible: boolean;
  startPosition: { x: number; y: number };
  endPosition: { x: number; y: number };
  productImage: string;
  onComplete: () => void;
}

const FlyingCartAnimation: React.FC<FlyingCartAnimationProps> = ({
  isVisible,
  startPosition,
  endPosition,
  productImage,
  onComplete
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      // Animation duration is 1500ms, then call onComplete
      const timer = setTimeout(() => {
        setIsAnimating(false);
        onComplete();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible && !isAnimating) return null;

  const deltaX = endPosition.x - startPosition.x;
  const deltaY = endPosition.y - startPosition.y;

  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      <div
        className={`absolute transition-all duration-1000 ease-in-out ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: startPosition.x,
          top: startPosition.y,
          transform: isAnimating 
            ? `translate(${deltaX}px, ${deltaY}px) scale(0.3)` 
            : 'translate(0, 0) scale(1)',
        }}
      >
        {/* Product Image Flying */}
        <div className="relative">
          <img
            src={productImage}
            alt=""
            className="w-12 h-12 rounded-lg border-2 border-red-500 shadow-lg animate-pulse"
          />
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-red-500/30 rounded-lg blur-sm animate-pulse"></div>
          {/* Cart icon overlay */}
          <div className="absolute -top-1 -right-1 bg-red-600 rounded-full p-1">
            <ShoppingCart className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyingCartAnimation;