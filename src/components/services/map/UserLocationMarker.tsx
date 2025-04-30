
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { customIcon } from './mapUtils';

interface UserLocationMarkerProps {
  position: [number, number];
  locationName: string;
}

const UserLocationMarker = ({ position, locationName }: UserLocationMarkerProps) => {
  return (
    <Marker 
      position={position} 
      // @ts-ignore - Leaflet typing issue
      icon={customIcon}
    >
      <Popup>
        <div>
          <strong>Selected Location:</strong>
          <p>{locationName || 'Click to select a location'}</p>
        </div>
      </Popup>
    </Marker>
  );
};

export default UserLocationMarker;
