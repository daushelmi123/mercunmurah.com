
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface VideoDialogProps {
  selectedVideo: { url: string; title: string } | null;
  onClose: () => void;
}

const VideoDialog: React.FC<VideoDialogProps> = ({ selectedVideo, onClose }) => {
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    
    // Handle YouTube URLs
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return url;
    }
    
    // Handle direct video files (MP4, etc.)
    if (url.includes('.mp4') || url.includes('.mov') || url.includes('.webm')) {
      return url;
    }
    
    // Return as is for other formats
    return url;
  };

  const isDirectVideo = (url: string) => {
    return url.includes('.mp4') || url.includes('.mov') || url.includes('.webm');
  };

  return (
    <Dialog open={!!selectedVideo} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full bg-black border-red-900/30">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">
            {selectedVideo?.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Watch this firework in action
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video w-full">
          {selectedVideo && (
            <>
              {isDirectVideo(selectedVideo.url) ? (
                <video
                  src={getEmbedUrl(selectedVideo.url)}
                  controls
                  className="w-full h-full rounded-lg"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={getEmbedUrl(selectedVideo.url)}
                  title={selectedVideo.title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
