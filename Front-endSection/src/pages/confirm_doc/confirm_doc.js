import React, { useState, useEffect } from "react";
import './confirm_doc.css';
import '../../App.css';
import jwt from 'jsonwebtoken';
import { Link, useHistory, useParams } from "react-router-dom";

import document from '../../img/document.svg';
import check from '../../img/check-circle.svg';
import upload from '../../img/upload.svg';
import info from '../../img/info-circle.svg';

function ConfirmDoc() {

    const history = useHistory();
    const [dormid, setDormid] = useState();
    const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
    const [userId, setUserId] = useState((token && jwt.decode(token).id) || '');
    const optionsGet = data => {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            method: 'get',
            // body: JSON.stringify(data)
        };
    };
    const options = data => {

        return {
            headers: {
                'Authorization': token,
            },
            method: 'post',
            body: data
        };
    };
    useEffect(() => {
        console.log("useEffect");
        console.log(userId);
        fetch('https://mehor-backend.herokuapp.com/api/dorm/dorm', optionsGet())
            .then(res => res.json())
            .then(res => {
                if (res.dorm) {
                    setDormid(res.dorm._id)
                    console.log(res.dorm);
                }
            })
            .catch(error => {
                console.log(error);

            })

    }, []);
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
    const HandleSubmit = (evt) => {
        console.log(dormid);
        
        const formData = new FormData();
        formData.append("dorm_id", dormid);
        formData.append("regis_pic", fileDorm);
        formData.append("location_pic", fileDormNum);
        for (var pair of formData.entries()) {
            console.log(pair[1]);
        }

        fetch('https://mehor-backend.herokuapp.com/api/dorm/dormDocument', options(formData))
            .then(res => res.json())
            .then(res => {
                console.log(res);
                // console.log(UserId);
                if (res.error) alert(res.error);
                if (res.success) {
                  
                }
            })
            .catch(error => {
                console.log(error);
                alert("success")
                history.push("/");
            })
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
                    <span className="text_header">เอกสารยืนยัน</span>
                </div>
                <hr className="line_under_head"></hr>

                <div className="d-flex ml-3-v">
                    <img alt="" className="img_cost" src={check} />
                    <span className="color-main fs-1-v">ค่าเงินมัดจำ/ค่าเงินประกัน</span>
                </div>

                <div className="text_head_table d-flex align-items-baseline color-main ml-3-v py-1-v">
                    <span className="fs-1-v">เอกสาร</span>
                    <span className="note">(โปรดแนบเอกสารให้ตรงกับหัวข้อ)</span>
                </div>
                <form onSubmit={HandleSubmit}>
                    <div className={`house_regis mx-auto d-flex ${fileDorm.type != undefined && "active"}`}>
                        <div className="header_topic d-flex">
                            <span className="pl-1-v fs-1-v">สำเนาทะเบียนบ้านของ "ที่พัก" พร้อมเซ็นสำเนาถูกต้อง</span>
                            <span className="remark_file pl-1-v">(รองรับไฟล์ jpg. png. และ pdf.)</span>
                        </div>
                        <div className="status d-flex">
                            <span className="status_file d-flex">
                                {fileDorm.type == undefined ?
                                    "ยังไม่ได้อัพโหลด" : fileDorm.name
                                }
                            </span>

                        </div>


                        <div className="upload d-flex">
                            <span className="upload_file d-flex position-relative">อัพโหลดสำเนาทะเบียนบ้าน
                        <input type="file" onChange={handleFileDorm} className="input-file-type position-absolute w-80 mx-auto bg-info" />
                                <img alt="" src={upload} className="img_upload ml-0-5-v"></img>
                            </span>
                        </div>
                    </div>

                    <div className={`house_regis mx-auto d-flex ${fileDormNum.type != undefined && "active"}`}>
                        <div className="header_topic d-flex position-relative">
                            <span className="pl-1-v fs-1-v">รูปถ่ายที่พักโดยให้เห็น "บ้านเลขที่" และอาคารที่ชัดเจน</span>
                            <span className="remark_file pl-1-v">(รองรับไฟล์ jpg. png. และ pdf.)</span>
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
                                <img alt="" src={upload} className="img_upload ml-0-5-v"></img>
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

                    <div className="info d-flex align-items-center ml-3-v">
                        <img alt="" src={info} className="img_info"></img>
                        <span className="text_info">รูปถ่ายที่ไม่อนุญาตให้ลงในประกาศ</span>
                    </div>

                    <ul className="list_info">
                        <li className="mb-0-5-v">หลักฐานที่ใช้ในการลงทะเบียนเพื่อยืนยันตัวตนกับ เว็บไซต์ mehor.in.th
                        <span className="text_red">จะไม่แสดงให้ผู้ใช้งานหรือบุคคลทั่วไปเห็น</span></li>
                        <li>ทีมงานใช้เวลาตรวจสอบเอกสารและเปลี่ยนสถานะการตรวจสอบไม่เกิน 7 วันทำการ</li>
                    </ul>

                    <div className="continue d-flex">
                        <button id="btn_continue" type="submit" className="border-0" style={{ width: '13vw' }}>บันทึกและรอการตรวจสอบ</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
// เอาไว้เพิ่มรูป
// const ImageThumb = ({ image }) => {
//     return <img src={URL.createObjectURL(image)} alt={image.name} />;
//   };

export default ConfirmDoc;