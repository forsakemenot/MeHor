import React from "react";
import './add_dom.css';
import './../App.css';
function AddDom() {
    return (
        <div>
            <div className="text_top">
                <p>จัดการที่พัก</p>
                <h2>ข้อมูลห้องพัก</h2>
            </div>
            <div className="d-flex header_dom">
                <div className="d-flex text_header">
                    <b>ข้อมูลที่พัก</b>
                </div>
                <div className="d-flex text_header">
                    <p>ประเภทหอพัก</p>
                </div>
            </div>

            <form>
                <div className="d-flex form_dom">
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">รหัสประเภท</div>
                        <div className="d-flex justify_start input_form"><input placeholder="รหัสประกาศ"></input></div>
                    </div>
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">ประเภทที่พัก</div>
                        <div className="d-flex justify_start input_form"><input></input></div>
                    </div>
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">ชื่อที่พัก</div>
                        <div className="d-flex justify_start input_form"><input></input></div>
                    </div>
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">อีเมล์</div>
                        <div className="d-flex justify_start input_form"><input placeholder="user@domain.com"></input></div>
                    </div>
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">เบอร์ติดต่อ</div>
                        <div className="d-flex justify_start input_form"><input placeholder="xxx-xxx-xxxx"></input></div>
                    </div>
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">คำอธิบาย</div>
                        <div className="d-flex justify_start input_form"><input placeholder="คำอธิบายรายละเอียด"></input></div>
                    </div>
                    <div className="p-1-0-1-1"><b>รายละเอียดค่าใช้จ่าย</b></div>
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">ราคารายเดือน</div>
                        <div className="d-flex justify_start input_form_2box">เริ่มต้น(บาท) <input></input></div>
                        <div className="d-flex justify_start input_form_2box">สูงสุด (บาท) <input></input></div>
                    </div>
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">ราคารายเดือนวัน</div>
                        <div className="d-flex justify_start input_form_2box">เริ่มต้น(บาท) <input></input></div>
                        <div className="d-flex justify_start input_form_2box">สูงสุด (บาท) <input></input></div>
                    </div>
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">อัตราค่าน้ำ</div>
                        <div className="d-flex justify_start input_form"><input placeholder="คำอธิบายรายละเอียด"></input></div>
                    </div>
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">อัตราค่าไฟ</div>
                        <div className="d-flex justify_start input_form"><input placeholder="คำอธิบายรายละเอียด"></input></div>
                    </div>
                    <div className="d-flex p-1-0-1-1">
                        <div className="d-flex justify_start text_form">ค่าส่วนกลาง</div>
                        <div className="d-flex justify_start input_form"><input placeholder="คำอธิบายรายละเอียด"></input></div>
                    </div>
                    <div className="save_form"><button className="btn_save bg-main">บันทึก</button></div>
                </div>
            </form>
        </div>
    );
}

export default AddDom;