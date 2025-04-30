
import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

interface MapClickHandlerProps {
  onClick: (e: L.LeafletMouseEvent) => void;
}

const MapClickHandler: React.FC<MapClickHandlerProps> = ({ onClick }) => {
  const map = useMap();
  
  useEffect(() => {
    if (map) {
      map.on('click', onClick);
      
      return () => {
        map.off('click', onClick);
      };
    }
  }, [map, onClick]);
  
  return null;
};

export default MapClickHandler;
