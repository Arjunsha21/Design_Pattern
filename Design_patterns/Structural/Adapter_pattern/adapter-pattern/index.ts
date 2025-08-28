import { MapService } from "./MapService";
import { GoogleMapsAdapter } from "./GoogleMapsAdapter";

const map: MapService = new GoogleMapsAdapter();

map.showLocation(12.9716, 77.5946);
map.showLocation(NaN, 77.5946);


