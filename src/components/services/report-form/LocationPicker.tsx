
import MapComponent from '../MapComponent';

interface LocationPickerProps {
  handleLocationSelect: (position: [number, number] | null) => void;
}

export const LocationPicker: React.FC<LocationPickerProps> = ({ handleLocationSelect }) => {
  return (
    <div className="mt-6">
      <MapComponent onLocationSelect={handleLocationSelect} />
      <p className="text-sm text-muted-foreground mt-2">
        Click on the map to mark the location and find the nearest police station.
      </p>
    </div>
  );
};
