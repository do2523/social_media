'use client';

import * as React from "react";
import { MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import {Icon} from "leaflet";
import { Marker as MarkerLeaflet,icon} from "leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css'
//import MapController from "~/app/_components/MapController";


export default function Map(){
	MarkerLeaflet.prototype.options.icon = icon({
		iconUrl: 'marker-icon.png',
		iconRetinaUrl: 'marker-icon.png',
		iconSize: [24, 24],
		iconAnchor: [12, 24],
		shadowUrl: 'marker-shadow.png',
		shadowRetinaUrl: 'marker-shadow.png',
		shadowSize: [41, 41],
		shadowAnchor: [12, 41],
	  })
	return (
		<div id="map" >
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: '180px',width: '300px'}}>
				<TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
			<Marker position={[51.505, -0.09]}>
    			<Popup>
      			A pretty CSS3 popup. <br /> Easily customizable.
    			</Popup >
  </Marker>
			</MapContainer>
		</div>
	)
}