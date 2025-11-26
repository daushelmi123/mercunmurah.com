import React from 'react';
import { getCurrentFestival, getSeasonalCopywriting, debugCurrentFestival } from '@/utils/festivalSeason';

const FestivalDebug: React.FC = () => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const currentFestival = getCurrentFestival();
  const seasonalCopy = getSeasonalCopywriting();

  // Log debug info
  React.useEffect(() => {
    debugCurrentFestival();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <h4>🎯 Festival Debug</h4>
      {currentFestival ? (
        <div>
          <p><strong>Active:</strong> {currentFestival.name}</p>
          <p><strong>Days Until:</strong> {currentFestival.daysUntil}</p>
        </div>
      ) : (
        <p><strong>No active festival</strong> (Default: Wedding)</p>
      )}
      
      <hr style={{ margin: '5px 0', opacity: 0.3 }} />
      <p><strong>Current Heading:</strong></p>
      <p style={{ fontSize: '10px', opacity: 0.8 }}>
        {seasonalCopy.mainHeading.en}
      </p>
    </div>
  );
};

export default FestivalDebug;