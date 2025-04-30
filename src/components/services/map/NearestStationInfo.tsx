
import React from 'react';

interface NearestStationInfoProps {
  station: {
    name: string;
    distance: string;
    phone: string;
  } | null;
}

const NearestStationInfo = ({ station }: NearestStationInfoProps) => {
  if (!station) return null;
  
  return (
    <div className="p-4 bg-uranian_blue-100 text-white">
      <h3 className="font-bold">Nearest Police Station</h3>
      <p>{station.name} - {station.distance} km away</p>
      <p>Emergency Contact: <a href={`tel:${station.phone}`} className="underline">{station.phone}</a></p>
    </div>
  );
};

export default NearestStationInfo;
