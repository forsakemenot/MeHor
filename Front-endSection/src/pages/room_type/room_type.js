import React from "react";
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


function RoomType() {
    return (
        <div className="d-flex justify-center">
            <div  className="bg_test">
                <div className="form_room">
                    <div className="d-flex" style={{paddingLeft: '3%'}}>
                        <img className="img_formdom" src={city}/>
                        <p className="text_header">ประเภทห้อง</p>
                    </div>
                    <hr></hr>
                    <div className="table_room"></div>

                    {/* cost */}
                    <div className="d-flex" style={{paddingLeft: '3%', marginTop: '3%'}}>
                        <img className="img_formdom" src={coin}/>
                        <p className="text_header">ค่าใช้จ่ายเพิ่มเติม</p>
                    </div>
                    <hr></hr>

                    {/* deposit */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img className="img_cost" src={money}/>
                            <p>ค่าเงินมัดจำ/ค่าเงินประกัน</p>
                        </div>
                        <hr style={{width: '50vw', margin: '-1% 0 1% 0'}}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="cost"></input>
                                <span style={{marginLeft : '1%'}}>จำนวนเงิน
                                    <input className="amount"></input>
                                    บาท
                                </span>
                                <small className="remark">*รวมค่าเงินมัดจำและค่าเงินประกัน</small>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="cost"></input>
                                <span style={{marginLeft : '1%'}}>ไม่มีคำเงินมัดจำ/ค่าเงินประกัน</span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="cost"></input>
                                <span style={{marginLeft : '1%'}}>อื่นๆ</span>
                                <input className="d-flex other" style={{marginLeft : '3.5%'}}></input>
                            </div>
                        </div>
                    </div>

                    {/* advance payment */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img className="img_cost" src={payment}/>
                            <p>จ่ายล่วงหน้า</p>
                        </div>
                        <hr style={{width: '50vw', margin: '-1% 0 1% 0'}}></hr>

                        <div className="m-left">
                        <div className="">
                                <input type="radio" name="payment"></input>
                                <span style={{marginLeft : '1%'}}>ระบุเดือน
                                    <select className="select_mount" style={{textIndent : '15%'}}>
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
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="payment"></input>
                                <span style={{marginLeft : '1%'}}>จำนวนเงิน
                                    <input className="amount"></input>
                                    บาท
                                </span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="payment"></input>
                                <span style={{marginLeft : '1%'}}>จ่ายเท่าจำนวนค่าห้อง</span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="payment"></input>
                                <span style={{marginLeft : '1%'}}>ไม่ต้องจ่ายล่วงหน้า</span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="payment"></input>
                                <span style={{marginLeft : '1%'}}>อื่นๆ</span>
                                <input className="d-flex other" style={{marginLeft : '3.5%'}}></input>
                            </div>
                        </div>
                    </div>

                    {/* electric */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img className="img_cost" style={{width: '1vw'}} src={electric}/>
                            <p>ค่าไฟ</p>
                        </div>
                        <hr style={{width: '50vw', margin: '-1% 0 1% 0'}}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="electric"></input>
                                <span style={{marginLeft : '1%'}}>ตามยูนิตที่ใช้
                                    <input className="amount"></input>
                                    บาท/หน่วย
                                </span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="electric"></input>
                                <span style={{marginLeft : '1%'}}>รวมในค่าห้องแล้ว</span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="electric"></input>
                                <span style={{marginLeft : '1%'}}>อื่นๆ</span>
                                <input className="d-flex other" style={{marginLeft : '3.5%'}}></input>
                            </div>
                        </div>
                    </div>

                    {/* water */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img className="img_cost" style={{width: '1vw'}} src={water}/>
                            <p>ค่าน้ำ</p>
                        </div>
                        <hr style={{width: '50vw', margin: '-1% 0 1% 0'}}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="water"></input>
                                <span style={{marginLeft : '1%'}}>ตามยูนิตที่ใช้
                                    <input className="amount"></input>
                                    บาท/หน่วย
                                </span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="water"></input>
                                <span style={{marginLeft : '1%'}}>เหมาจ่าย
                                    <input className="amount" style={{marginLeft : '3.5%'}}></input>
                                    บาทต่อ<u>คน</u>/หน่วย
                                </span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="water"></input>
                                <span style={{marginLeft : '1%'}}>เหมาจ่าย
                                    <input className="amount" style={{marginLeft : '3.5%'}}></input>
                                    บาทต่อ<u>ห้อง</u>/หน่วย
                                </span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="water"></input>
                                <span style={{marginLeft : '1%'}}>รวมในค่าห้องแล้ว</span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="water"></input>
                                <span style={{marginLeft : '1%'}}>อื่นๆ</span>
                                <input className="d-flex other" style={{marginLeft : '3.5%'}}></input>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="checkbox" name=""></input>
                                <span style={{marginLeft : '1%'}}>จ่ายขั้นต่ำ
                                    <input className="amount" style={{marginLeft : '3.5%'}}></input>
                                    บาท/เดือน
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* wifi */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img className="img_cost" src={wifi}/>
                            <p>อินเทอร์เน็ต</p>
                        </div>
                        <hr style={{width: '50vw', margin: '-1% 0 1% 0'}}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="wifi"></input>
                                <span style={{marginLeft : '1%'}}>จำนวนเงิน
                                    <input className="amount"></input>
                                    บาท/เดือน
                                </span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="wifi"></input>
                                <span style={{marginLeft : '1%'}}>ฟรี</span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="wifi"></input>
                                <span style={{marginLeft : '1%'}}>ไม่มีอินเทอร์เน็ต</span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="wifi"></input>
                                <span style={{marginLeft : '1%'}}>อื่นๆ</span>
                                <input className="d-flex other" style={{marginLeft : '3.5%'}}></input>
                            </div>
                        </div>
                    </div>

                    {/* keycard */}
                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img className="img_cost" style={{width: '1vw'}} src={keycard}/>
                            <p>คีย์การ์ด</p>
                        </div>
                        <hr style={{width: '50vw', margin: '-1% 0 1% 0'}}></hr>

                        <div className="m-left">
                            <div className="">
                                <input type="radio" name="keycard"></input>
                                <span style={{marginLeft : '1%'}}>จำนวนเงิน
                                    <input className="amount"></input>
                                    บาท/เดือน
                                </span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="keycard"></input>
                                <span style={{marginLeft : '1%'}}>ฟรี</span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="keycard"></input>
                                <span style={{marginLeft : '1%'}}>ไม่มีคีย์การ์ด</span>
                            </div>
                            <div style={{marginTop: '1%'}}>
                                <input type="radio" name="keycard"></input>
                                <span style={{marginLeft : '1%'}}>อื่นๆ</span>
                                <input className="d-flex other" style={{marginLeft : '3.5%'}}></input>
                            </div>
                        </div>
                    </div>

                    <div className="continue d-flex">
                        <Link to="/FurnitureDom"><button id="btn_continue">ขั้นตอนถัดไป</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}



export default RoomType;