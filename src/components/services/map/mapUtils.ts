import L from 'leaflet';

// Fix for the default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom marker icon
export const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

// Police station icon
export const policeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Major Indian Police Stations data
export const policeStations = [
  // Rajasthan Police Stations
  // Jaipur Region
  { name: 'Jaipur Police Commissioner Office', location: [26.9196, 75.7878] as [number, number], phone: '0141-2619999' },
  { name: 'Vaishali Nagar Police Station', location: [26.9085, 75.7453] as [number, number], phone: '0141-2351616' },
  { name: 'Mansarovar Police Station', location: [26.8540, 75.7677] as [number, number], phone: '0141-2397819' },
  { name: 'Jawahar Circle Police Station', location: [26.8527, 75.8122] as [number, number], phone: '0141-2721673' },
  { name: 'Gandhi Nagar Police Station', location: [26.8920, 75.8184] as [number, number], phone: '0141-2707374' },
  { name: 'Malviya Nagar Police Station', location: [26.8570, 75.8233] as [number, number], phone: '0141-2520443' },

  // Jodhpur Region
  { name: 'Jodhpur Police Commissioner Office', location: [26.2967, 73.0351] as [number, number], phone: '0291-2650700' },
  { name: 'Ratanada Police Station', location: [26.2859, 73.0319] as [number, number], phone: '0291-2514444' },
  { name: 'Sardarpura Police Station', location: [26.2789, 73.0227] as [number, number], phone: '0291-2545444' },

  // Udaipur Region
  { name: 'Udaipur Police Control Room', location: [24.5854, 73.7125] as [number, number], phone: '0294-2413001' },
  { name: 'Surajpole Police Station', location: [24.5760, 73.6868] as [number, number], phone: '0294-2410877' },
  { name: 'Ambamata Police Station', location: [24.5998, 73.7152] as [number, number], phone: '0294-2431444' },

  // Kota Region
  { name: 'Kota Police Control Room', location: [25.2138, 75.8648] as [number, number], phone: '0744-2327000' },
  { name: 'Mahavir Nagar Police Station', location: [25.2154, 75.8643] as [number, number], phone: '0744-2500726' },
  { name: 'Railway Colony Police Station', location: [25.2066, 75.8473] as [number, number], phone: '0744-2366200' },

  // Bikaner Region
  { name: 'Bikaner Police Control Room', location: [28.0229, 73.3119] as [number, number], phone: '0151-2226915' },
  { name: 'Kotwali Police Station', location: [28.0167, 73.3233] as [number, number], phone: '0151-2520222' },
  { name: 'Sadar Police Station Bikaner', location: [28.0182, 73.3362] as [number, number], phone: '0151-2226925' },

  // Ajmer Region
  { name: 'Ajmer Police Control Room', location: [26.4499, 74.6399] as [number, number], phone: '0145-2624835' },
  { name: 'Clock Tower Police Station', location: [26.4509, 74.6384] as [number, number], phone: '0145-2627756' },
  { name: 'Civil Lines Police Station Ajmer', location: [26.4601, 74.6350] as [number, number], phone: '0145-2627755' },

  // Bharatpur Region
  { name: 'Bharatpur Police Control Room', location: [27.2152, 77.5030] as [number, number], phone: '05644-223999' },
  { name: 'Kotwali Bharatpur', location: [27.2157, 77.4921] as [number, number], phone: '05644-222304' },
  { name: 'Mathura Gate Police Station', location: [27.2134, 77.4889] as [number, number], phone: '05644-222305' },

  // Alwar Region
  { name: 'Alwar Police Control Room', location: [27.5529, 76.6346] as [number, number], phone: '0144-2337550' },
  { name: 'Kotwali Alwar', location: [27.5576, 76.6106] as [number, number], phone: '0144-2702251' },
  { name: 'Mahila Police Station Alwar', location: [27.5571, 76.6239] as [number, number], phone: '0144-2702252' },

  // Sri Ganganagar Region
  { name: 'Sri Ganganagar Police Control', location: [29.9094, 73.8800] as [number, number], phone: '0154-2440644' },
  { name: 'Kotwali Sri Ganganagar', location: [29.9198, 73.8712] as [number, number], phone: '0154-2440643' },
  { name: 'Sadar Bazar Police Station', location: [29.9167, 73.8747] as [number, number], phone: '0154-2440642' },

  // Sikar Region
  { name: 'Sikar Police Control Room', location: [27.6094, 75.1398] as [number, number], phone: '01572-250718' },
  { name: 'Kotwali Sikar', location: [27.6120, 75.1401] as [number, number], phone: '01572-250719' },
  { name: 'Sadar Police Station Sikar', location: [27.6147, 75.1367] as [number, number], phone: '01572-250720' },

  // Other Major Metropolitan Cities
  // Delhi
  { name: 'Delhi Police Headquarters', location: [28.6280, 77.2378] as [number, number], phone: '112' },
  { name: 'Connaught Place Police Station', location: [28.6315, 77.2167] as [number, number], phone: '011-23744100' },

  // Mumbai
  { name: 'Mumbai Police Headquarters', location: [18.9633, 72.8315] as [number, number], phone: '022-22621855' },
  { name: 'Colaba Police Station', location: [18.9220, 72.8265] as [number, number], phone: '022-22151717' },

  // Bangalore
  { name: 'Bangalore Police Commissioner Office', location: [12.9781, 77.5949] as [number, number], phone: '080-22942215' },
  { name: 'Koramangala Police Station', location: [12.9279, 77.6271] as [number, number], phone: '080-25530100' },

  // Chennai
  { name: 'Chennai Police Headquarters', location: [13.0827, 80.2707] as [number, number], phone: '044-28447777' },
  { name: 'Anna Nagar Police Station', location: [13.0850, 80.2101] as [number, number], phone: '044-26161273' },

  // Kolkata
  { name: 'Kolkata Police Headquarters', location: [22.5726, 88.3639] as [number, number], phone: '033-22143024' },
  { name: 'Park Street Police Station', location: [22.5551, 88.3522] as [number, number], phone: '033-22272100' },

  // Lucknow
  { name: 'Lucknow Police Commissioner Office', location: [26.8467, 80.9462] as [number, number], phone: '0522-2628965' },
  { name: 'Hazratganj Police Station', location: [26.8485, 80.9435] as [number, number], phone: '0522-2628969' },
  { name: 'Gomti Nagar Police Station', location: [26.8604, 81.0101] as [number, number], phone: '0522-2395001' }
];

// Calculate distance between two points using Haversine formula
export const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return R * c; // Distance in km
};

// Find the nearest police station to a given location
export const findNearestPoliceStation = (userLocation: [number, number]) => {
  let nearestDistance = Infinity;
  let nearest = null;
  
  // Find the nearest police station
  policeStations.forEach(station => {
    const distance = getDistance(
      userLocation[0], 
      userLocation[1], 
      station.location[0], 
      station.location[1]
    );
    
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearest = { ...station, distance: distance.toFixed(2) };
    }
  });
  
  return nearest;
};
