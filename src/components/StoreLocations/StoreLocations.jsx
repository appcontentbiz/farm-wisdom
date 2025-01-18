import { useState } from 'react';
import '../../styles/StoreLocations.css';

const mockStores = [
  { id: 1, name: 'Farm Supply Co.', lat: 37.7749, lng: -122.4194 },
  { id: 2, name: 'AgriTools Depot', lat: 37.7849, lng: -122.4094 },
  { id: 3, name: 'GreenThumb Nursery', lat: 37.7649, lng: -122.4294 }
];

export default function StoreLocations() {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <div className="store-locations">
      <h2>Nearby Farm Stores</h2>
      <div className="map-placeholder">
        {/* Map would be integrated here */}
        <p>Map Placeholder</p>
      </div>
      <ul className="store-list">
        {mockStores.map(store => (
          <li key={store.id} onClick={() => setSelectedStore(store)}>
            {store.name}
          </li>
        ))}
      </ul>

      {selectedStore && (
        <div className="store-details">
          <h3>{selectedStore.name}</h3>
          <p>Latitude: {selectedStore.lat}</p>
          <p>Longitude: {selectedStore.lng}</p>
        </div>
      )}
    </div>
  );
}
