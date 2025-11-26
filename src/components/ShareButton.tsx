import React from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
  image?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const ShareButton: React.FC<ShareButtonProps> = ({ 
  title, 
  text, 
  url,
  image,
  className,
  variant = 'outline',
  size = 'default'
}) => {
  const handleShare = async () => {
    const shareData: any = {
      title,
      text,
      url
    };

    // Image parameter removed to keep URLs clean for sharing

    // Check if native sharing is available and supported
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        console.log('Shared successfully!');
        toast.success('Shared successfully!');
        return;
      } catch (error: any) {
        // User cancelled sharing
        if (error.name === 'AbortError') {
          console.log('User cancelled sharing');
          return;
        }
        // Log other errors but don't show to user
        console.log('Sharing failed:', error);
      }
    }

    // Fallback: Copy to clipboard and show toast
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      toast.success('Link copied to clipboard!');
    } catch (clipboardError) {
      // Final fallback: Open WhatsApp
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
      window.open(whatsappUrl, '_blank');
      toast.success('Opening WhatsApp to share...');
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant={variant}
      size={size}
      className={className}
    >
      <Share2 className="w-4 h-4" />
    </Button>
  );
};

export default ShareButton;