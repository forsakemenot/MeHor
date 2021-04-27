import React, { useState } from "react";
import './room_type.css';
import '../../App.css';

import { Link } from "react-router-dom";

import city from '../../img/city.svg';
import coin from '../../img/coins.svg';
import money from '../../img/money-bill-wave.svg';
import payment from '../../img/money-check.svg';
import electric from '../../img/electrician.svg';
import water from '../../img/water.svg';
import wifi from '../../img/wifi.svg';
import keycard from '../../img/keycard.svg';
import Add_row from "../../components/add_row/add_row"


function RoomType() {

    const [numRow, setNumRow] = useState(1);
    const [roomType, setRoomType] = useState({});
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
        setRoomType({
            ...roomType,
            [field]: value //กำหนดค่าของ Value แต่ละอันเข้า Object NAME:VALUE
        });
    }

    let rows = [];
    for (var i = 0; i < numRow; i++) {
        rows.push(
            <Add_row key={i}
                row={i + 1}
                col1={"room_name"}
                col2={"room_area"}
                col3={"room_cost"}
                col4={"additional"} />
        );
    }

    const handleAdd = () => {
        setNumRow(numRow + 1)
    }


    const HandleSubmit = (evt) => {
        console.log(roomType);
        // fetch('http://103.13.231.22:5000/api/dorm/dormtype', options(roomType))
        //   .then(res => res.json())
        //   .then(res => {
        //     if (res.success) {


        //       alert("success")

        //     //   history.push("/FurnitureDom");
        //     }
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   })
        evt.preventDefault();
      }

    return (
        <div className="d-flex">
            <div className="w-20 position-absolute box_progress">
                <div className="d-flex w-70 mx-auto align-items-center position-relative">
                    <span className="w-20 text-center num_progress active">1</span>
                    <span className="w-80 text-left text_progress">ข้อมูลทั่วไป</span>
                    <div className="position-absolute line_progress active"></div>
                </div>
                <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
                    <span className="w-20 text-center num_progress active">2</span>
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

            <div className="form_room">
                <form onSubmit={HandleSubmit}>
                    <div className="d-flex" style={{ paddingLeft: '3%' }}>
                        <img alt="" className="img_formdom" src={city} />
                        <p className="text_header">ประเภทห้อง</p>
                    </div>
                    <hr></hr>
                    {rows}
                    <button onClick={() => handleAdd()} type="button" className="btn btn-primary ml-3-v">+</button>
                    {/* cost */}
                    <div className="d-flex" style={{ paddingLeft: '3%', marginTop: '3%' }}>
                        <img alt="" className="img_formdom" src={coin} />
                        <p className="text_header">ค่าใช้จ่ายเพิ่มเติม</p>
                    </div>
                    <hr></hr>

                    {/* deposit */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img alt="" className="img_cost" src={money} />
                            <p>ค่าเงินมัดจำ/ค่าเงินประกัน</p>
                        </div>
                        <hr style={{ width: '50vw', margin: '-1% 0 1% 0' }}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="cost" />
                                <span style={{ marginLeft: '1%' }}>จำนวนเงิน
                            <input className="amount" name="insurance_bill" onChange={handleInputChange} />บาท</span>
                                <small className="remark">*รวมค่าเงินมัดจำและค่าเงินประกัน</small>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" value="no_insurance_bill" name="insurance_bill" onChange={handleInputChange} />
                                <span style={{ marginLeft: '1%' }}>ไม่มีคำเงินมัดจำ/ค่าเงินประกัน</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="cost" />
                                <span style={{ marginLeft: '1%' }}>อื่นๆ</span>
                                <input className="d-flex other" name="insurance_bill" onChange={handleInputChange} style={{ marginLeft: '3.5%' }} />
                            </div>
                        </div>
                    </div>

                    {/* advance payment */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img alt="" className="img_cost" src={payment} />
                            <p>จ่ายล่วงหน้า</p>
                        </div>
                        <hr style={{ width: '50vw', margin: '-1% 0 1% 0' }}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="payment" />
                                <span style={{ marginLeft: '1%' }}>ระบุเดือน
                                <select className="select_mount" style={{ textIndent: '15%' }} name="pre_paid" onChange={handleInputChange}>
                                        <option>-- เลือกเดือน --</option>
                                        <option value="1">1 เดือน</option>
                                        <option value="2">2 เดือน</option>
                                        <option value="3">3 เดือน</option>
                                        <option value="4">4 เดือน</option>
                                        <option value="5">5 เดือน</option>
                                        <option value="6">6 เดือน</option>
                                        <option value="7">1 ปี</option>
                                    </select>
                                </span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="payment" />
                                <span style={{ marginLeft: '1%' }}>จำนวนเงิน
                            <input className="amount" name="pre_paid" onChange={handleInputChange} />บาท</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="payment" name="pre_paid" onChange={handleInputChange} value="จ่ายเท่าจำนวนค่าห้อง" />
                                <span style={{ marginLeft: '1%' }}>จ่ายเท่าจำนวนค่าห้อง</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="payment" name="pre_paid" onChange={handleInputChange} value="ไม่ต้องจ่ายล่วงหน้า" />
                                <span style={{ marginLeft: '1%' }}>ไม่ต้องจ่ายล่วงหน้า</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="payment" />
                                <span style={{ marginLeft: '1%' }}>อื่นๆ</span>
                                <input className="d-flex other" name="pre_paid" onChange={handleInputChange} style={{ marginLeft: '3.5%' }} />
                            </div>
                        </div>
                    </div>

                    {/* electric */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img alt="" className="img_cost" style={{ width: '1vw' }} src={electric} />
                            <p>ค่าไฟ</p>
                        </div>
                        <hr style={{ width: '50vw', margin: '-1% 0 1% 0' }}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="electric" />
                                <span style={{ marginLeft: '1%' }}>ตามยูนิตที่ใช้
                            <input className="amount" name="electric_bill" onChange={handleInputChange} />บาท/หน่วย</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="electric" name="electric_bill" onChange={handleInputChange} value="รวมในค่าห้องแล้ว" />
                                <span style={{ marginLeft: '1%' }}>รวมในค่าห้องแล้ว</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="electric" />
                                <span style={{ marginLeft: '1%' }}>อื่นๆ</span>
                                <input className="d-flex other" name="electric_bill" onChange={handleInputChange} style={{ marginLeft: '3.5%' }} />
                            </div>
                        </div>
                    </div>

                    {/* water */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img alt="" className="img_cost" style={{ width: '1vw' }} src={water} />
                            <p>ค่าน้ำ</p>
                        </div>
                        <hr style={{ width: '50vw', margin: '-1% 0 1% 0' }}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="water" />
                                <span style={{ marginLeft: '1%' }}>ตามยูนิตที่ใช้
                            <input className="amount" name="water_bill" onChange={handleInputChange} />บาท/หน่วย</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="water" />
                                <span style={{ marginLeft: '1%' }}>เหมาจ่าย
                            <input className="amount" name="water_bill" onChange={handleInputChange} style={{ marginLeft: '3.5%' }} />บาทต่อ<u>คน</u>/หน่วย</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="water" />
                                <span style={{ marginLeft: '1%' }}>เหมาจ่าย
                            <input className="amount" name="water_bill" onChange={handleInputChange} style={{ marginLeft: '3.5%' }} />บาทต่อ<u>ห้อง</u>/หน่วย</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="water" value="รวมในค่าห้องแล้ว" name="water_bill" onChange={handleInputChange} />
                                <span style={{ marginLeft: '1%' }}>รวมในค่าห้องแล้ว</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="water" />
                                <span style={{ marginLeft: '1%' }}>อื่นๆ</span>
                                <input className="d-flex other" name="water_bill" onChange={handleInputChange} style={{ marginLeft: '3.5%' }} />
                            </div>
                            {/* ยังไม่ได้ทำส่วนนี้ */}
                            {/* <div style={{ marginTop: '1%' }}>
                            <input type="checkbox" name="" />
                            <span style={{ marginLeft: '1%' }}>จ่ายขั้นต่ำ
                            <input className="amount" style={{ marginLeft: '3.5%' }} />บาท/เดือน</span>
                        </div> */}
                        </div>
                    </div>

                    {/* wifi */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img alt="" className="img_cost" src={wifi} />
                            <p>อินเทอร์เน็ต</p>
                        </div>
                        <hr style={{ width: '50vw', margin: '-1% 0 1% 0' }}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="wifi" />
                                <span style={{ marginLeft: '1%' }}>จำนวนเงิน
                            <input className="amount" name="internet_bill" onChange={handleInputChange} />บาท/เดือน</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="wifi" value="ฟรี" name="internet_bill" onChange={handleInputChange} />
                                <span style={{ marginLeft: '1%' }}>ฟรี</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="wifi" value="ไม่มีอินเทอร์เน็ต" name="internet_bill" onChange={handleInputChange} />
                                <span style={{ marginLeft: '1%' }}>ไม่มีอินเทอร์เน็ต</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="wifi" />
                                <span style={{ marginLeft: '1%' }}>อื่นๆ</span>
                                <input className="d-flex other" name="internet_bill" onChange={handleInputChange} style={{ marginLeft: '3.5%' }} />
                            </div>
                        </div>
                    </div>

                    {/* keycard */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img alt="" className="img_cost" style={{ width: '1vw' }} src={keycard} />
                            <p>คีย์การ์ด</p>
                        </div>
                        <hr style={{ width: '50vw', margin: '-1% 0 1% 0' }}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="keycard" />
                                <span style={{ marginLeft: '1%' }}>จำนวนเงิน<input className="amount" name="keycard" onChange={handleInputChange} />บาท/เดือน</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="keycard" value="ฟรี" name="keycard" onChange={handleInputChange} />
                                <span style={{ marginLeft: '1%' }}>ฟรี</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="keycard" value="ไม่มีคีย์การ์ด" name="keycard" onChange={handleInputChange} />
                                <span style={{ marginLeft: '1%' }}>ไม่มีคีย์การ์ด</span>
                            </div>
                            <div style={{ marginTop: '1%' }}>
                                <input type="radio" name="keycard" />
                                <span style={{ marginLeft: '1%' }}>อื่นๆ</span>
                                <input className="d-flex other" name="keycard" onChange={handleInputChange} style={{ marginLeft: '3.5%' }} />
                            </div>
                        </div>
                    </div>

                    <div className="continue d-flex">
                        <button id="btn_continue" type="submit">ขั้นตอนถัดไป</button>
                    </div>
                </form>
            </div>

        </div>
    );
}



export default RoomType;