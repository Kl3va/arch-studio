import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { contactDetailsSection } from "../../data/contactData/contactData";

const MapSection = () => {
  const { locations } = contactDetailsSection;


  return (
    <section className="section--map" id="leaflet-map">
      <div className="mapping">
        <MapContainer
          center={[37.09024, -95.712891]}
          zoom={5}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map(({ address, coord }, index) => {
            return (
              <Marker position={coord} key={index}>
                <Popup>{address}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
};

export default MapSection;
