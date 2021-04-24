import React, { useState, useRef, useMemo, useCallback, useEffect } from "react";
import './add_dom.css';
import './../../App.css';
import { Link, useHistory } from "react-router-dom";
import city from './../../img/city.svg';
import card from './../../img/address-card.svg';
import gps from './../../img/crosshair.svg';

import {
  MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet'
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

// const showMyLocation = () => {
//   if (location.loaded && !location.error) {
//     mapRef.current.leafletElements.flyTo([location.coordinates.lat, location.coordinates.lng],
//       zoom, { animate: true }
//     );
//   } else {
//     alert(location.error.massage)
//   }
// };

// function DraggableMarker() {
//     const [draggable, setDraggable] = useState(false)
//     const [position, setPosition] = useState(center)
//     const markerRef = useRef(null)
//     const eventHandlers = useMemo(
//       () => ({
//         dragend() {
//           const marker = markerRef.current
//           if (marker != null) {
//             setPosition(marker.getLatLng())
//           }
//         },
//       }),
//       [],
//     )
//     const toggleDraggable = useCallback(() => {
//       setDraggable((d) => !d)
//     }, [])

//     return (
//       <Marker
//         icon={myIcon}
//         draggable={draggable}
//         eventHandlers={eventHandlers}
//         position={position}
//         ref={markerRef}>
//         <Popup minWidth={90}>
//           <span onClick={toggleDraggable}>
//             {draggable
//               ? 'Marker is draggable'
//               : 'Click here to make marker draggable'}
//           </span>
//         </Popup>
//       </Marker>
//     )
// }

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

// ตัว marker
function LocationMarker() {
  const [position, setPosition] = useState(null)
  const [draggable, setDraggable] = useState(false)

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
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      icon={myIcon}
      position={position}>
      <Popup>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
      </Popup>
    </Marker>
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
    fetch('http://103.13.231.22:5000/api/dorm/adddorm', options(dormDetails))
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

  const [map, setMap] = useState(null)
  const displayMap = useMemo(
    () => (
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} whenCreated={setMap} className="map_con">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
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
      <div className="form_dom">

        <div className="d-flex pl-2-v">
          <img alt="" className="img_formdom" src={city} />
          <p className="text_header">ข้อมูลที่พัก</p>
        </div>
        <hr className="line_under_head" />
        <form onSubmit={HandleSubmit} >
          <div className="d-flex main_form">
            <p>ชื่อที่พัก</p>
            <input type="text" onChange={handleInputChange} name="dorm_name"></input>
          </div>
          <div className="d-flex main_form">
            <p>ชื่อที่พัก (ภาษาอังกฤษ)</p>
            <input type="text" onChange={handleInputChange} name="dorm_name_eng"></input>
          </div>
          <div className="d-flex main_form">
            <p>ประเภทที่พัก</p>
            <select onChange={handleInputChange} name="dorm_type">
              <option>-- เลือก ประเภทที่พัก --</option>
              <option value="apartment">หอพัก</option>
              <option value="condo">คอนโด</option>
            </select>
          </div>
          <div className="d-flex main_form">
            <p>โซนที่พัก</p>
            <select onChange={handleInputChange} name="dorm_zone">
              <option>-- เลือก โซนที่พัก --</option>
              <option value="apartment">เกกี</option>
              <option value="condo">RNP</option>
              <option value="apartment">FBT</option>
              <option value="condo">จินดา</option>
              <option value="condo">นิคม</option>
            </select>
          </div>
          <div className="d-flex main_form">
            <p>อื่น ๆ</p>
            <input type="text" onChange={handleInputChange} name="dorm_others"></input>
          </div>

          {/* address form */}
          <div className="d-flex main_form mt-2-v">
            <p>ที่อยู่</p>
            <div className="d-flex">
              <div className="address_form">
                <p>เลขที่</p>
                <input type="text" onChange={handleAddressChange} name="address_number"></input>
              </div>
              <div className="address_form">
                <p>ซอย</p>
                <input type="text" onChange={handleAddressChange} name="alley"></input>
              </div>
              <div className="address_form">
                <p>ถนน</p>
                <input type="text" onChange={handleAddressChange} name="street"></input>
              </div>
            </div>
            <div className="d-flex mt-1-5-v">
              <div className="address_form">
                <p>จังหวัด</p>
                <input type="text" onChange={handleAddressChange} name="province"></input>
              </div>
              <div className="address_form">
                <p>อำเภอ/เขต</p>
                <input type="text" onChange={handleAddressChange} name="area"></input>
              </div>
              <div className="address_form">
                <p>ตำบล/แขวง</p>
                <input type="text" onChange={handleAddressChange} name="district"></input>
              </div>
              <div className="address_form">
                <p>รหัสไปรษณีย์</p>
                <input type="text" onChange={handleAddressChange} name="postcode"></input>
              </div>
            </div>
          </div>

          {/* map */}
          <div className="d-flex main_form mt-2-v">
            <p>แผนที่</p>
            <button className="btn_gps">
              <img alt="" src={gps} />
              ค้นหาจากตำแหน่งปัจจุบันของคุณ
            </button>

            {map ? <DisplayPosition map={map} /> : null}

            <div>
              {displayMap}
            </div>

          </div>


          {/* detail apartment */}
          {/* <div className="d-flex main_form mt-2-v">
                        <p>รายละเอียด</p>
                        <div className="d-flex">
                            <button className="btn_detail">Bold</button>
                            <button className="btn_detail">Italic</button>
                            <button className="btn_detail_underline">Underline</button>
                            <button className="btn_detail">List</button>
                        </div>

                        <textarea onChange={handleInputChange} name="description" className="textarea_form"></textarea>
                    </div> */}

          {/* contact-dom */}
          <div className="d-flex mt-2-v pl-2-v">
            <img alt="" className="img_formdom" src={card} />
            <p className="text_header">ข้อมูลติดต่อ</p>
          </div>
          <hr className="line_under_head" />
          <div className="d-flex main_form">
            <p>ชื่อผู้ดูแล</p>
            <input onChange={handleInputChange} name="owner_name" type="text"></input>
          </div>
          <div className="d-flex main_form">
            <p>เบอร์โทรศัพท์</p>
            <input onChange={handleInputChange} name="owner_phone" type="text"></input>
          </div>
          <div className="d-flex main_form">
            <p>เบอร์โทรศัพท์มือถือ (ถ้ามี)</p>
            <input onChange={handleInputChange} name="owner_office_phone" type="text"></input>
          </div>
          {/* <div className="d-flex main_form">
                        <p>อีเมล์</p>
                        <input type="text" onChange={handleInputChange} name="owner_line"></input>
                    </div> */}
          {/* กูขอเม้นไว้ก่อนนะ ลืมเชื่อม อีสัส */}
          <div className="d-flex main_form">
            <p>Line ID</p>
            <input type="text" onChange={handleInputChange} name="owner_line"></input>
          </div>
          <div className="d-flex main_form">
            <p>Facebook</p>
            <input type="text" onChange={handleInputChange} name="owner_facebook"></input>
            <small>ระบุเป็น URL เช่น : https://www.facebook.com/mehor.in.th</small>
          </div>

          <div className="continue d-flex">
            <Link to="/RoomType"><button type="submit" id="btn_continue">ขั้นตอนถัดไป</button></Link>
            {/* <button  id="btn_continue">ขั้นตอนถัดไป</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDom;