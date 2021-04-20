import React, { useState } from "react";
import './add_dom.css';
import './../../App.css';
import { Link , useHistory} from "react-router-dom";
import city from './../../img/city.svg';
import card from './../../img/address-card.svg';
import gps from './../../img/crosshair.svg';
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
        fetch('http://nocgy.com:5000/api/dorm/adddorm', options(dormDetails))
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
                        <button className="btn_gps"><img alt="" src={gps} />ค้นหาจากตำแหน่งปัจจุบันของคุณ</button>
                        <div style={{
                            backgroundColor: '#ffe4e4',
                            width: '50vw',
                            height: '20vw',
                            marginTop: '1%'
                        }}>

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