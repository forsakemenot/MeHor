import React from "react";
import './confirm_doc.css';
import '../../App.css';

import { Link } from "react-router-dom";

import document from '../../img/document.svg';
import check from '../../img/check-circle.svg';
import upload from '../../img/upload.svg';
import info from '../../img/info-circle.svg';

function ConfirmDoc() {
    return (
        <div className="d-flex justify-center">
            <div  className="bg_test">
                <div className="form_confirm">
                    <div className="d-flex" style={{paddingLeft: '3%'}}>
                        <img className="img_doc" src={document}/>
                        <p className="text_header">เอกสารยืนยัน</p>
                    </div>
                    <hr></hr>

                    <div id="form_cost" className="d-flex">
                        <div className="d-flex">
                            <img className="img_cost" src={check}/>
                            <p>ค่าเงินมัดจำ/ค่าเงินประกัน</p>
                        </div>
                        <hr style={{width: '50vw', margin: '-1% 0 1% 0'}}></hr>
                    </div>

                    <div className="text_head_table d-flex">
                        <p>เอกสาร</p>
                        <p className="note">(โปรดแนบเอกสารให้ตรงกับหัวข้อ)</p>
                    </div>

                    <div className="house_regis d-flex">
                        <div className="header_topic d-flex">
                            <p className="topic_house">สำเนาทะเบียนบ้านของ "ที่พัก" พร้อมเซ็นสำเนาถูกต้อง</p>
                            <p className="remark_file">(รองรับไฟล์ jpg. png. และ pdf.)</p>
                        </div>
                        <div className="status d-flex">
                            <p className="status_file d-flex">ยังไม่ได้อัพโหลด</p>
                        </div>
                        <div className="upload d-flex">
                            <p className="upload_file d-flex">อัพโหลดสำเนาทะเบียนบ้าน
                                <img src={upload} style={{width: '1.3vw', marginLeft: '5%'}}></img>
                            </p>
                        </div>
                    </div>

                    <div className="house_number d-flex">
                    <div className="header_topic d-flex">
                            <p className="topic_house">รูปถ่ายที่พักโดยให้เห็น "บ้านเลขที่" และอาคารที่ชัดเจน</p>
                            <p className="remark_file">(รองรับไฟล์ jpg. png. และ pdf.)</p>
                        </div>
                        <div className="status d-flex">
                            <p className="status_file d-flex">ยังไม่ได้อัพโหลด</p>
                        </div>
                        <div className="upload d-flex">
                            <p className="upload_file d-flex">อัพโหลดสำเนาทะเบียนบ้าน
                                <img src={upload} style={{width: '1.3vw', marginLeft: '5%'}}></img>
                            </p>
                        </div>
                    </div>

                    <div className="info d-flex">
                        <img src={info} className="img_info"></img>
                        <span className="text_info">รูปถ่ายที่ไม่อนุญาตให้ลงในประกาศ</span>
                    </div>
                    
                    <ul className="list_info">
                        <li>หลักฐานที่ใช้ในการลงทะเบียนเพื่อยืนยันตัวตนกับ เว็บไซต์ mehor.in.th
                            <span style={{fontWeight:'400', color: '#C90000'}}> จะไม่แสดงให้ผู้ใช้งานหรือบุคคลทั่วไปเห็น</span></li>
                        <li>ทีมงานใช้เวลาตรวจสอบเอกสารและเปลี่ยนสถานะการตรวจสอบไม่เกิน 7 วันทำการ</li>
                    </ul>

                    <div className="continue d-flex">
                        <Link to="/DomMe"><button id="btn_continue" style={{width: '13vw'}}>บันทึกและรอการตรวจสอบ</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
        );
    }
    
export default ConfirmDoc;