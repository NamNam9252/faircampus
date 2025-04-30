import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, MapPin } from 'lucide-react';

import MapClickHandler from './MapClickHandler';
import UserLocationMarker from './UserLocationMarker';
import PoliceStationMarker from './PoliceStationMarker';
import NearestStationInfo from './NearestStationInfo';
import { policeStations, findNearestPoliceStation } from './mapUtils';

interface MapComponentProps {
  onLocationSelect: (position: [number, number] | null) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ onLocationSelect }) => {
  const [position, setPosition] = useState<[number, number]>([26.5844, 73.8496]); // Center of Rajasthan
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nearestStation, setNearestStation] = useState<any | null>(null);

  const handleMapClick = (e: L.LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
    
    // Get location name from coordinates using reverse geocoding
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
      .then(response => response.json())
      .then(data => {
        const locationName = data.display_name || `Location at ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        setSelectedLocation(locationName);
        onLocationSelect([lat, lng]);
        
        // Find nearest police station
        const nearest = findNearestPoliceStation([lat, lng]);
        setNearestStation(nearest);
      })
      .catch(error => {
        console.error('Error getting location name:', error);
        const locationName = `Location at ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        setSelectedLocation(locationName);
        onLocationSelect([lat, lng]);
      });
  };
  
  const getCurrentLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newPosition: [number, number] = [latitude, longitude];
          setPosition(newPosition);
          
          // Get location name from coordinates
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => {
              const locationName = data.display_name || `Your Location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
              setSelectedLocation(locationName);
              onLocationSelect(newPosition);
              
              // Find nearest police station
              const nearest = findNearestPoliceStation(newPosition);
              setNearestStation(nearest);
            })
            .catch(error => {
              console.error('Error getting location name:', error);
              const locationName = `Your Location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
              setSelectedLocation(locationName);
              onLocationSelect(newPosition);
            })
            .finally(() => {
              setIsLoading(false);
            });
        },
        (error) => {
          console.error('Error getting current location:', error);
          setIsLoading(false);
          alert('Unable to retrieve your location. Please enable location services or select a location on the map.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
      setIsLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-uranian_blue" />
          Location Information
        </CardTitle>
        <div className="flex gap-2">
          <Button 
            onClick={getCurrentLocation} 
            variant="outline"
            disabled={isLoading}
            className="hover:bg-uranian_blue hover:text-white transition-colors duration-300"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Getting location...
              </>
            ) : (
              'Use My Current Location'
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <MapContainer 
          style={{ height: '600px', width: '100%' }}
          center={position}
          zoom={7}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* User selected location */}
          <UserLocationMarker position={position} locationName={selectedLocation} />
          
          {/* Display police stations */}
          {policeStations.map((station, index) => (
            <PoliceStationMarker key={index} station={station} index={index} />
          ))}
          
          {/* Add map click handler */}
          <MapClickHandler onClick={handleMapClick} />
        </MapContainer>
        
        <NearestStationInfo station={nearestStation} />
      </CardContent>
    </Card>
  );
};

export default MapComponent;
