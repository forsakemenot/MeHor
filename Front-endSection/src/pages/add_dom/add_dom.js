import React, { useState } from "react";
import './add_dom.css';
import './../../App.css';

import { Link } from "react-router-dom";

import city from './../../img/city.svg';
import card from './../../img/address-card.svg';
import gps from './../../img/crosshair.svg';
function AddDom() {
    const [dormDetails, setdormDetails] = useState({ latitude: 1.5551, longtitude: 1.5858 });
    const [addressDetails, setAddressDetails] = useState('');
    const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
    const options = data => {
        return {
            headers: {
                'Content-Type': 'application/json',
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
        dormDetails.token = token
        fetch('localhost:5000/api/dorm/adddorm', options(dormDetails))
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    // const token = res.token;
                    // delete res.token;
                    // localStorage.setItem('jwtToken', token);
                    // setData(token);
                    // history.push("/");
                    // window.location.reload();
                    alert("success")
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

    return (
        <div className="d-flex">

            <div className="form_dom">
                <div className="d-flex" style={{ paddingLeft: '3%' }}>
                    <img className="img_formdom" src={city} />
                    <p className="text_header">ข้อมูลที่พัก</p>
                </div>
                <hr></hr>
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
                    <div className="d-flex main_form mt-2">
                        <p>ที่อยู่</p>
                        <div className="d-flex">
                            <div id="address_form">
                                <p>เลขที่</p>
                                <input type="text" onChange={handleAddressChange} name="address_number"></input>
                            </div>
                            <div id="address_form">
                                <p>ซอย</p>
                                <input type="text" onChange={handleAddressChange} name="alley"></input>
                            </div>
                            <div id="address_form">
                                <p>ถนน</p>
                                <input type="text" onChange={handleAddressChange} name="street"></input>
                            </div>
                        </div>
                        <div className="d-flex" style={{ marginTop: '2%' }}>
                            <div id="address_form">
                                <p>จังหวัด</p>
                                <input type="text" onChange={handleAddressChange} name="province"></input>
                            </div>
                            <div id="address_form">
                                <p>อำเภอ/เขต</p>
                                <input type="text" onChange={handleAddressChange} name="area"></input>
                            </div>
                            <div id="address_form">
                                <p>ตำบล/แขวง</p>
                                <input type="text" onChange={handleAddressChange} name="district"></input>
                            </div>
                            <div id="address_form">
                                <p>รหัสไปรษณีย์</p>
                                <input type="text" onChange={handleAddressChange} name="postcode"></input>
                            </div>
                        </div>
                    </div>

                    {/* map */}
                    <div className="d-flex main_form mt-2">
                        <p>แผนที่</p>
                        <button className="btn_gps"><img src={gps} style={{ width: '7%', marginRight: '5%' }} />ค้นหาจากตำแหน่งปัจจุบันของคุณ</button>
                        <div style={{
                            backgroundColor: '#ffe4e4',
                            width: '50vw',
                            height: '20vw',
                            marginTop: '1%'
                        }}>

                        </div>
                    </div>


                    {/* detail apartment */}
                    <div className="d-flex main_form mt-2">
                        <p>รายละเอียด</p>
                        <div className="d-flex">
                            <button id="btn_detail">Bold</button>
                            <button id="btn_detail">Italic</button>
                            <button id="btn_detail_underline">Underline</button>
                            <button id="btn_detail">List</button>
                        </div>

                        <textarea onChange={handleInputChange} name="description" className="textarea_form"></textarea>
                    </div>

                    {/* contact-dom */}
                    <div className="d-flex mt-2" style={{ paddingLeft: '3%'}}>
                        <img className="img_formdom" src={card} />
                        <p className="text_header">ข้อมูลติดต่อ</p>
                    </div>
                    <hr></hr>
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
                        {/* <Link to="/RoomType"><button id="btn_continue">ขั้นตอนถัดไป</button></Link> */}
                        <button id="btn_continue">ขั้นตอนถัดไป</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddDom;