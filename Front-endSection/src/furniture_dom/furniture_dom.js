import React from "react";
import './furniture_dom.css';
import './../App.css';

import { Link } from "react-router-dom";

import city from './../img/city.svg';
import door from './../img/door-open.svg';
import hotel from './../img/hotel.svg';
import camera from './../img/camera.svg';
import warning from './../img/warning.svg';


function FurnitureDom() {
    return (
        <div className="d-flex justify-center">
            <div  className="bg_test">
                <div className="form_image_room">
                    <div className="d-flex" style={{paddingLeft: '3%'}}>
                        <img className="img_formdom" src={city}/>
                        <p className="text_header">สิ่งอำนวยความสะดวก</p>
                    </div>
                    <hr></hr>

                    <div id="furniture" className="d-flex">
                        <div className="">
                            <div className="in_room d-flex">
                               <img className="img_furniture" src={door}/>
                                <p className="text_topic">ภายในห้อง</p>
                            </div>

                            <div id="check">
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>เครื่องปรับอากาศ</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>พัดลม</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>เครื่องทำน้ำอุ่น</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>เตียง โต๊ะ ตู้เสื้อผ้า</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>Internet / wifi</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>TV</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>Truevision</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>ซิงค์ล้างจาน</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>ตู้เย็น</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>เคเบิลทีวี / ดาวเทียม</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="">
                            <div className="out_room d-flex">
                               <img className="img_furniture" src={hotel}/>
                                <p className="text_topic">ส่วนกลาง</p>
                            </div>

                            <div id="check">
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>ที่จอดรถ</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>ระบบ Keycard</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>กล้องวงจรปิด (CCTV)</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>เครื่องซักผ้า</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>ไมโครเวฟ</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>ตู้น้ำหยอดเหรียญ</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>อินเทอร์เน็ตภายในอาคาร</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>ลิฟท์</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>สระว่ายน้ำ</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>แม่บ้านทำความสะอาดห้องทุกเดือน</span>
                                </div>
                                <div className="checkbox_room">
                                    <input type="checkbox"></input>
                                    <span style={{marginLeft: '2%'}}>อนุญาตให้เลี้ยงสัตว์</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex" style={{paddingLeft: '3%'}}>
                        <img className="img_formdom" src={camera}/>
                        <p className="text_header">รูปภาพที่พัก</p>
                    </div>
                    <hr></hr>

                    <img src={warning} className="img_warning"></img>
                    <span className="text_warning">รูปถ่ายที่ไม่อนุญาตให้ลงในประกาศ</span>

                    <div className="policy_of_img d-flex">
                            
                        <p><u>รูปถ่ายที่ติดลายน้ำของกิจการอื่นๆ</u></p>

                        <p><u>รูปถ่ายที่ติดลิขสิทธิ์หรือละเมิดสิทธิส่วนบุคคล</u></p>
                            
                        <p><u>รูปถ่ายที่มีการถูกดัดแปลง แก้ไขจากต้นฉบับ</u></p>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default FurnitureDom;