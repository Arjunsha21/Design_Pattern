// Expected interface in your app
interface MapService {
  showLocation(lat: number, lng: number): void;
}

// External library (you cannot change this)
class GoogleMapsAPI {
  renderMap(coords: { lat: number; lng: number }) {
    console.log(`Google Maps: Showing (${coords.lat}, ${coords.lng})`);
  }
}

// Adapter to make GoogleMapsAPI match your app's interface
class GoogleMapsAdapter implements MapService {
  private googleMaps = new GoogleMapsAPI();

  showLocation(lat: number, lng: number): void {
    this.googleMaps.renderMap({ lat, lng });
  }
}

// Usage
const map: MapService = new GoogleMapsAdapter();
map.showLocation(12.9716, 77.5946);

//Woithout Adapter
// // External library (unchanged)
// class GoogleMapsAPI {
//   renderMap(coords: { lat: number; lng: number }) {
//     console.log(`Google Maps: Showing (${coords.lat}, ${coords.lng})`);
//   }
// }

// // App function using GoogleMapsAPI directly
// function showMapDirectly(lat: number, lng: number) {
//   const googleMaps = new GoogleMapsAPI();
//   googleMaps.renderMap({ lat, lng });
// }

// // Usage
// showMapDirectly(12.9716, 77.5946);