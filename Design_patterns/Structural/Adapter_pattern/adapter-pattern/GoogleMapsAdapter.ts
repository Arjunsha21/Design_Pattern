import { MapService } from "./MapService";
import { GoogleMapsAPI } from "./GoogleMapsAPI";

export class GoogleMapsAdapter implements MapService {
  private googleMaps = new GoogleMapsAPI();

  showLocation(lat: number, lng: number): void {
    try {
      if (isNaN(lat) || isNaN(lng)) {
        throw new Error("Invalid coordinates: Latitude and Longitude must be numbers.");
      }

      this.googleMaps.renderMap({ lat, lng });
    } catch (error: any) {
      console.error(`Map rendering failed: ${error.message}`);
    }
  }
}


