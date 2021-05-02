import React, { useState, useRef, useMemo, useCallback, useEffect } from "react";
import '../../pages/add_dom/add_dom.css';
import './../../App.css';
import gps from '../../img/crosshair.svg';

import {
    MapContainer, TileLayer, Marker, Popup, useMapEvents
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from '../../img/location.svg';

const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
});

const center = {
    lat: 13.730170300961191,
    lng: 100.77812501163383,
}

const zoom = 15

function DraggableMarker() {
    const [position, setPosition] = useState(center)

    const markerRef = useRef(null)

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [position],
    )

    return (
        <Marker
            icon={myIcon}
            draggable="True"
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
        >
            <Popup minWidth={90}>
                <span >
                    Hello world
          {/* {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'} */}
                </span>
            </Popup>
        </Marker>
    )
}

// ส่วน Reset Map
function DisplayPosition({ map }) {
    const [position, setPosition] = useState(map.getCenter())

    const onClick = useCallback(() => {
        map.setView(center, zoom)
    }, [map])

    const onMove = useCallback(() => {
        setPosition(map.getCenter())
    }, [map])

    useEffect(() => {
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    }, [map, onMove])

    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            {/* <button onClick={onClick}>reset</button> */}
        </p>
    )
}
function MapDorm() {
    const [dormDetails, setdormDetails] = useState({ latitude: 1.5551, longtitude: 1.5858 });
    
    // MAP
    const [map, setMap] = useState(null)

    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())

                }
            },
        }),
        [],
    )

    const map_position = useCallback(() => {
        map?.setView(position, zoom)
    }, [position])

    useEffect(() => {
        console.log(position); map_position()
        setdormDetails({
            ...dormDetails,
            latitude: position.lat,
            longtitude: position.lng
        })
    }, [position])

    const onClick = useCallback(() => {
        map.setView(center, zoom)
        setPosition(center)
    }, [map])

    const displayMap = useMemo(
        () => (
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                whenCreated={setMap}
                className="map_con"
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <LocationMarker /> */}
                <Marker
                    draggable="True"
                    icon={myIcon}
                    scrollWheelZoom={true}
                    eventHandlers={eventHandlers}
                    position={position}
                    ref={markerRef}
                >
                    <Popup minWidth={90}>
                        <span >
                            Hello world
      {/* {draggable
        ? 'Marker is draggable'
        : 'Click here to make marker draggable'} */}
                        </span>
                    </Popup>
                </Marker>
            </MapContainer>
        ),
        [],
    )

    return (
        <div>
            {/* map */}
            <div className="d-flex main_form mt-2-v">
                <p>แผนที่</p>
                <button className="btn_gps">
                    <img alt="" src={gps} />
          ค้นหาจากตำแหน่งปัจจุบันของคุณ
       </button>

                <p>
                    latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
                    <button type="button" onClick={onClick}>reset</button>
                </p>

                <div>
                    {displayMap}
                </div>

            </div>
        </div>
    );
}

export default MapDorm;