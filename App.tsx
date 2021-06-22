import React from 'react';
//Now we can use MapContainer TileLayer Marker and Popup from react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

function App() {

  
  return (
    <div className="header">
     <h1>Public RestRoom Finder</h1>

     <MapContainer center={[51.505,-0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      <Marker position={[51.505,-0.09]}>
      <Popup>
        Your current location. <br /> London.
      </Popup>
      </Marker>
      </MapContainer>
      
    </div>
    
     
  );
}



export default App;
