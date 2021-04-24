import React from "react";
import './furniture_dom.css';
import '../../App.css';

import { Link } from "react-router-dom";
import city from '../../img/city.svg';
import door from '../../img/door-open.svg';
import hotel from '../../img/hotel.svg';
import camera from '../../img/camera.svg';
import warning from '../../img/warning.svg';
import upload_pic from '../../img/upload_pic.svg';


function FurnitureDom() {
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
                    <div className="position-absolute line_progress active"></div>
                </div>
                <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
                    <span className="w-20 text-center num_progress active">3</span>
                    <span className="w-80 text-left text_progress">สิ่งอำนวย ความสะดวก และรูปภาพ</span>
                    <div className="position-absolute line_progress"></div>
                </div>
                <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
                    <span className="w-20 text-center num_progress">4</span>
                    <span className="w-80 text-left text_progress">เอกสารยืนยัน</span>
                    <div className="position-absolute"></div>
                </div>
            </div>
            <div className="form_image_room">
                <div className="d-flex" style={{ paddingLeft: '3%' }}>
                    <img alt="" className="img_formdom" src={city} />
                    <p className="text_header">สิ่งอำนวยความสะดวก</p>
                </div>
                <hr></hr>

                <div id="furniture" className="d-flex">
                    <div className="">
                        <div className="in_room d-flex">
                            <img alt="" className="img_furniture" src={door} />
                            <p className="text_topic">ภายในห้อง</p>
                        </div>

                        <div id="check">
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>เครื่องปรับอากาศ</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>พัดลม</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>เครื่องทำน้ำอุ่น</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>เตียง โต๊ะ ตู้เสื้อผ้า</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>Internet / wifi</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>TV</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>Truevision</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>ซิงค์ล้างจาน</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>ตู้เย็น</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>เคเบิลทีวี / ดาวเทียม</span>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="out_room d-flex">
                            <img alt="" className="img_furniture" src={hotel} />
                            <p className="text_topic">ส่วนกลาง</p>
                        </div>

                        <div id="check">
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>ที่จอดรถ</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>ระบบ Keycard</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>กล้องวงจรปิด (CCTV)</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>เครื่องซักผ้า</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>ไมโครเวฟ</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>ตู้น้ำหยอดเหรียญ</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>อินเทอร์เน็ตภายในอาคาร</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>ลิฟท์</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>สระว่ายน้ำ</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>แม่บ้านทำความสะอาดห้องทุกเดือน</span>
                            </div>
                            <div className="checkbox_room">
                                <input type="checkbox"></input>
                                <span style={{ marginLeft: '2%' }}>อนุญาตให้เลี้ยงสัตว์</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex" style={{ paddingLeft: '3%' }}>
                    <img alt="" className="img_formdom" src={camera} />
                    <p className="text_header">รูปภาพที่พัก</p>
                </div>
                <hr></hr>

                <img alt="" src={warning} className="img_warning"></img>
                <span className="text_warning">รูปถ่ายที่ไม่อนุญาตให้ลงในประกาศ</span>

                <div className="policy_of_img d-flex">
                    <div>
                        <p><u>รูปถ่ายที่ติดลายน้ำของกิจการอื่นๆ</u></p>
                    </div>
                    <div>
                        <p><u>รูปถ่ายที่ติดลิขสิทธิ์หรือละเมิดสิทธิส่วนบุคคล</u></p>
                    </div>
                    <div>
                        <p><u>รูปถ่ายที่มีการถูกดัดแปลง แก้ไขจากต้นฉบับ</u></p>
                    </div>
                </div>

                <div className="upload_image d-flex">
                    <div>
                        <img alt="" src={upload_pic}></img>
                    </div>
                </div>
                    <div className="d-flex justify-content-center">
                        {/* <button type="file" id="customFile" name="filename" className="btn_add_image file" data-browse-on-zone-click="true">เพิ่มรูป</button> */}
                        <input multiple id="input-b1" name="input-b1" type="file" class="file" data-browse-on-zone-click="true"></input>
                    </div>
                <div className="remark_upload">
                    <p>* รูปภาพแรก จะเป็น<u style={{ fontWeight: '600' }}>รูปภาพหลัก</u>ของหอพัก</p>
                    <p>** ไฟล์ภาพรองรับขนาดไม่เกิน 5 mb</p>
                </div>

                <div className="continue d-flex">
                    <Link to="/ConfirmDoc"><button id="btn_continue">ขั้นตอนถัดไป</button></Link>
                </div>

            </div>
        </div>

    );
}

export default FurnitureDom;