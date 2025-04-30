
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { policeIcon } from './mapUtils';

interface PoliceStationMarkerProps {
  station: {
    name: string;
    location: [number, number];
    phone: string;
  };
  index: number;
}

const PoliceStationMarker = ({ station, index }: PoliceStationMarkerProps) => {
  return (
    <Marker 
      key={index} 
      position={station.location} 
      // @ts-ignore - Leaflet typing issue
      icon={policeIcon}
    >
      <Popup>
        <div>
          <strong>{station.name}</strong>
          <p>Emergency: {station.phone}</p>
        </div>
      </Popup>
    </Marker>
  );
};

export default PoliceStationMarker;
