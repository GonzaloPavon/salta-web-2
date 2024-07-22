import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {AtomComponent} from "../../Enums/AtomComponent";

interface MapLocationProps {
    latitude : number;
    longitude : number;
    zoomLevel: number;
}

function MapLocation(props: MapLocationProps) {

    return (
        <MapContainer center={{ lat: props.latitude, lng: props.longitude}} zoom={props.zoomLevel} className="h-[20.938rem] w-[20rem] lg:h-[25rem] lg:w-[37.75rem] rounded-3xl mx-auto">
            <TileLayer
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        </MapContainer>
    );
    }

    MapLocation.componentName = AtomComponent.MapLocation;

export default MapLocation;