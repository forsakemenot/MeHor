import React, { useState } from "react";
import './confirm_doc.css';
import '../../App.css';

import { Link } from "react-router-dom";

import document from '../../img/document.svg';
import check from '../../img/check-circle.svg';
import upload from '../../img/upload.svg';
import info from '../../img/info-circle.svg';

function ConfirmDoc() {
    const [fileDorm, setFileDorm] = useState("");
    const [fileDormNum, setFileDormNum] = useState("");

    // Handles file upload event and updates state
    function handleFileDorm(event) {
        setFileDorm(event.target.files[0]);
        // Add code here to upload file to server
        // ...
    }
    function handleFileDormNum(event) {
        setFileDormNum(event.target.files[0]);

        // Add code here to upload file to server
        // ...
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
                    <div className="position-absolute line_progress active"></div>
                </div>
                <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
                    <span className="w-20 text-center num_progress active">3</span>
                    <span className="w-80 text-left text_progress">สิ่งอำนวย ความสะดวก และรูปภาพ</span>
                    <div className="position-absolute line_progress active"></div>
                </div>
                <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
                    <span className="w-20 text-center num_progress active">4</span>
                    <span className="w-80 text-left text_progress">เอกสารยืนยัน</span>
                    <div className="position-absolute"></div>
                </div>
            </div>

            <div className="form_dorm">
                <div className="d-flex">
                    <img alt="" className="img_doc" src={document} />
                    <p className="text_header">เอกสารยืนยัน</p>
                </div>
                <hr className="line_under_head"></hr>

                <div className="d-flex ml-3-v">
                    <img alt="" className="img_cost" src={check} />
                    <p>ค่าเงินมัดจำ/ค่าเงินประกัน</p>
                </div>

                <div className="text_head_table d-flex">
                    <p>เอกสาร</p>
                    <p className="note">(โปรดแนบเอกสารให้ตรงกับหัวข้อ)</p>
                </div>

                <div className={`house_regis mx-auto d-flex ${fileDorm.type != undefined && "active"}`}>
                    <div className="header_topic d-flex">
                        <p className="topic_house">สำเนาทะเบียนบ้านของ "ที่พัก" พร้อมเซ็นสำเนาถูกต้อง</p>
                        <p className="remark_file">(รองรับไฟล์ jpg. png. และ pdf.)</p>
                    </div>
                    <div className="status d-flex">
                        <p className="status_file d-flex">
                            {fileDorm.type == undefined ?
                                "ยังไม่ได้อัพโหลด" : fileDorm.name
                            }
                        </p>
                    </div>
                    <div className="upload d-flex">
                        <p className="upload_file d-flex position-relative">อัพโหลดสำเนาทะเบียนบ้าน
                        <input type="file" onChange={handleFileDorm} className="input-file-type position-absolute w-80 mx-auto bg-info" />
                            <img alt="" src={upload} style={{ width: '1.3vw', marginLeft: '5%' }}></img>
                        </p>
                    </div>
                </div>

                <div className={`house_regis mx-auto d-flex ${fileDormNum.type != undefined && "active"}`}>
                    <div className="header_topic d-flex position-relative">
                        <p className="topic_house">รูปถ่ายที่พักโดยให้เห็น "บ้านเลขที่" และอาคารที่ชัดเจน</p>
                        <p className="remark_file">(รองรับไฟล์ jpg. png. และ pdf.)</p>
                    </div>
                    {/* {file.name} */}
                    <div className="status d-flex">
                        <p className="status_file d-flex">
                            {fileDormNum.type == undefined ?
                                "ยังไม่ได้อัพโหลด" : fileDormNum.name
                            }
                        </p>
                    </div>
                    <div className="upload d-flex position-relative">
                        <input type="file" onChange={handleFileDormNum} className="input-file-type position-absolute w-80 mx-auto bg-info" />
                        <p className="upload_file d-flex">อัพโหลดสำเนาทะเบียนบ้าน
                                <img alt="" src={upload} style={{ width: '1.3vw', marginLeft: '5%' }}></img>
                        </p>
                    </div>
                    {/* <div id="upload-box" className="file-input">
                        
                        <label for="file">
                            Select file
                        <p class="file-name"></p>
                        </label>
                        {file && <ImageThumb image={file} />}
                    </div> */}
                </div>

                <div className="info d-flex">
                    <img alt="" src={info} className="img_info"></img>
                    <span className="text_info">รูปถ่ายที่ไม่อนุญาตให้ลงในประกาศ</span>
                </div>

                <ul className="list_info">
                    <li>หลักฐานที่ใช้ในการลงทะเบียนเพื่อยืนยันตัวตนกับ เว็บไซต์ mehor.in.th
                            <span style={{ fontWeight: '400', color: '#C90000' }}> จะไม่แสดงให้ผู้ใช้งานหรือบุคคลทั่วไปเห็น</span></li>
                    <li>ทีมงานใช้เวลาตรวจสอบเอกสารและเปลี่ยนสถานะการตรวจสอบไม่เกิน 7 วันทำการ</li>
                </ul>

                <div className="continue d-flex">
                    <Link to="/DomMe"><button id="btn_continue" style={{ width: '13vw' }}>บันทึกและรอการตรวจสอบ</button></Link>
                </div>

            </div>
        </div>
    );
}
// เอาไว้เพิ่มรูป
// const ImageThumb = ({ image }) => {
//     return <img src={URL.createObjectURL(image)} alt={image.name} />;
//   };

export default ConfirmDoc;