import React, { useState, useRef, useMemo, useCallback, useEffect } from "react";
import './add_dom.css';
import './../../App.css';
import { Link, useHistory } from "react-router-dom";
import city from './../../img/city.svg';
import card from './../../img/address-card.svg';
import gps from './../../img/crosshair.svg';
import AddMap from '../../components/Map/Map'

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from './../../img/location.svg';

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

function AddDom() {
   const history = useHistory();
   const [dormDetails, setdormDetails] = useState({ latitude: 1.5551, longtitude: 1.5858 });
   const [addressDetails, setAddressDetails] = useState('');
   const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
   const options = data => {
      return {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
         },
         method: 'post',
         body: JSON.stringify(data)
      };
   };
   const handleInputChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      setdormDetails({
         ...dormDetails,
         [field]: value //กำหนดค่าของ Value แต่ละอันเข้า Object NAME:VALUE
      });
   }

   const HandleSubmit = (evt) => {
      console.log(dormDetails);
      fetch('http://localhost:5000/api/dorm/adddorm', options(dormDetails))
         .then(res => res.json())
         .then(res => {
            if (res.success) {


               alert("success")

               history.push("/RoomType");
            }
         })
         .catch(error => {
            console.log(error);
         })
      evt.preventDefault();
   }

   const handleAddressChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      setAddressDetails({
         ...addressDetails,
         [field]: value
      });
      setdormDetails({
         ...dormDetails,
         dorm_address: addressDetails
      });
   }

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
            className="map_con d-flex"
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
      <div className="d-flex">
         <div className="w-20 position-absolute box_progress">
            <div className="d-flex w-70 mx-auto align-items-center position-relative">
               <span className="w-20 text-center num_progress active">1</span>
               <span className="w-80 text-left text_progress">ข้อมูลทั่วไป</span>
               <div className="position-absolute line_progress"></div>
            </div>
            <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
               <span className="w-20 text-center num_progress">2</span>
               <span className="w-80 text-left text_progress">ประเภทห้องและค่าเช่า</span>
               <div className="position-absolute line_progress"></div>
            </div>
            <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
               <span className="w-20 text-center num_progress">3</span>
               <span className="w-80 text-left text_progress">สิ่งอำนวย ความสะดวก และรูปภาพ</span>
               <div className="position-absolute line_progress"></div>
            </div>
            <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
               <span className="w-20 text-center num_progress">4</span>
               <span className="w-80 text-left text_progress">เอกสารยืนยัน</span>
               <div className="position-absolute"></div>
            </div>
         </div>

         <div className="form_dorm w-60">
            <div className="d-flex align-items-center pl-2-v">
               <img alt="" className="img_formdorm" src={city} />
               <span className="text_header">ข้อมูลที่พัก</span>
            </div>
            <hr className="line_under_head" />

            <form onSubmit={HandleSubmit} >
               <div className="d-flex main_form">
                  <span className="fs-1-v">ชื่อที่พัก *</span>
                  <input type="text" onChange={handleInputChange} name="dorm_name" required></input>
               </div>
               <div className="d-flex main_form">
                  <span className="fs-1-v">ชื่อที่พัก (ภาษาอังกฤษ)</span>
                  <input type="text" onChange={handleInputChange} name="dorm_name_eng"></input>
               </div>
               <div className="d-flex main_form">
                  <span className="fs-1-v">ประเภทที่พัก *</span>
                  <select onChange={handleInputChange} name="dorm_type" required>
                     <option>-- เลือก ประเภทที่พัก --</option>
                     <option value="apartment">หอพัก</option>
                     <option value="condo">คอนโด</option>
                  </select>
               </div>
               <div className="d-flex main_form">
                  <span className="fs-1-v">โซนที่พัก *</span>
                  <select onChange={handleInputChange} name="dorm_zone" required>
                     <option>-- เลือก โซนที่พัก --</option>
                     <option value="Geygee">เกกี</option>
                     <option value="RNP">RNP</option>
                     <option value="FBT">FBT</option>
                     <option value="Jinda">จินดา</option>
                     <option value="Nikom">นิคม</option>
                  </select>
               </div>
               <div className="d-flex main_form">
                  <span className="fs-1-v">โซนที่พักอื่นๆ</span>
                  <input type="text" onChange={handleInputChange} name="dorm_others"></input>
               </div>

               {/* address form */}
               <div className="d-flex main_form mt-2-v">
                  <span className="pt-1-5-v fs-1-v">ที่อยู่</span>
                  <div className="d-flex mt-1-v">
                     <div className="address_form">
                        <span className="fs-1-v">เลขที่ *</span>
                        <input type="text" onChange={handleAddressChange} name="address_number" required />
                     </div>
                     <div className="address_form">
                        <span className="fs-1-v">ซอย *</span>
                        <input type="text" onChange={handleAddressChange} name="alley" required />
                     </div>
                     <div className="address_form">
                        <span className="fs-1-v">ถนน *</span>
                        <input type="text" onChange={handleAddressChange} name="street" required />
                     </div>
                  </div>
                  <div className="d-flex mt-1-5-v">
                     <div className="address_form">
                        <span className="fs-1-v">จังหวัด *</span>
                        <input type="text" onChange={handleAddressChange} name="province" required />
                     </div>
                     <div className="address_form">
                        <span className="fs-1-v">อำเภอ/เขต *</span>
                        <input type="text" onChange={handleAddressChange} name="area" required />
                     </div>
                     <div className="address_form">
                        <span className="fs-1-v">ตำบล/แขวง *</span>
                        <input type="text" onChange={handleAddressChange} name="district" required />
                     </div>
                     <div className="address_form">
                        <span className="fs-1-v">รหัสไปรษณีย์ *</span>
                        <input type="text" onChange={handleAddressChange} name="postcode" required />
                     </div>
                  </div>
               </div>
               <div className="d-flex flex-column mx-auto w-80 justify-content-center mt-2-v">
                  <div className="d-flex flex-column w-100 mx-auto">
                     <span className="color-main fs-1-v">แผนที่</span>
                     {/* <button className="w-45 btn_gps mt-0-5-v color-white d-flex align-items-center justify-content-center bg-main border-0 fs-0-9-v py-0-3-v"><img alt="" src={gps} className="mr-0-5-v" />ค้นหาจากตำแหน่งปัจจุบันของคุณ</button> */}
                     <span className="d-flex align-items-center my-0-5-v color-main">
                        {/* latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '} */}
                        <button type="button" className="fs-1-v" onClick={onClick}>reset map</button>
                     </span>
                  </div>

                  {/* <AddMap /> */}
                  <div className="w-100 d-flex justify-content-center">
                     {displayMap}
                  </div>
               </div>


               {/* detail apartment */}
               <div className="d-flex flex-column color-main mt-2-v w-80 mx-auto">
                  <span className="w-100 mx-auto fs-1-v">รายละเอียด *</span>
                  <textarea onChange={handleInputChange} name="description" className="textarea_form w-100" required></textarea>
               </div>

               {/* contact-dom */}
               <div className="d-flex mt-3-v pl-2-v">
                  <img alt="" className="img_formdorm" src={card} />
                  <span className="text_header">ข้อมูลติดต่อ</span>
               </div>
               <hr className="line_under_head" />
               <div className="d-flex main_form">
                  <span>ชื่อผู้ดูแล</span>
                  <input onChange={handleInputChange} name="owner_name" type="text"></input>
               </div>
               <div className="d-flex main_form">
                  <span>เบอร์โทรศัพท์</span>
                  <input onChange={handleInputChange} name="owner_phone" type="text"></input>
               </div>
               <div className="d-flex main_form">
                  <span>เบอร์โทรศัพท์มือถือ (ถ้ามี)</span>
                  <input onChange={handleInputChange} name="owner_office_phone" type="text"></input>
               </div>
               {/* <div className="d-flex main_form">
                        <p>อีเมล์</p>
                        <input type="text" onChange={handleInputChange} name="owner_line"></input>
                    </div> */}
               {/* กูขอเม้นไว้ก่อนนะ ลืมเชื่อม อีสัส */}
               <div className="d-flex main_form">
                  <span>Line ID</span>
                  <input type="text" onChange={handleInputChange} name="owner_line"></input>
               </div>
               <div className="d-flex main_form">
                  <span>Facebook</span>
                  <input type="text" onChange={handleInputChange} name="owner_facebook"></input>
                  <small className="fs-0-8-v">ระบุเป็น URL เช่น : https://www.facebook.com/mehor.in.th</small>
               </div>

               <div className="continue d-flex">
                  <button id="btn_continue" type="submit">ขั้นตอนถัดไป</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default AddDom;