import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function conveninetOut_panel() {
    return (
        <div className="card w-50">
            <div className="card-header">
                <span className="fs-1-v">สิ่งอำนวยความสะดวก</span>
                <span className="pl-0-5-v color-second fs-1-v">(ส่วนกลาง)</span>
            </div>
            <div className="form-group mt-1-v d-flex flex-column">
                <div className="check">
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="ที่จอดรถ"></input>
                        <span className="fs-0-9-v">ที่จอดรถ</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="ระบบ"></input>
                        <span className="fs-0-9-v">ระบบ Keycard</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="กล้องวงจรปิด"></input>
                        <span className="fs-0-9-v">กล้องวงจรปิด (CCTV)</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="เครื่องซักผ้า"></input>
                        <span className="fs-0-9-v">เครื่องซักผ้า</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="ไมโครเวฟ"></input>
                        <span className="fs-0-9-v">ไมโครเวฟ</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="ตู้น้ำหยอดเหรียญ"></input>
                        <span className="fs-0-9-v">ตู้น้ำหยอดเหรียญ</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="อินเทอร์เน็ตภายในอาคาร"></input>
                        <span className="fs-0-9-v">อินเทอร์เน็ตภายในอาคาร</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="ลิฟท์"></input>
                        <span className="fs-0-9-v">ลิฟท์</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="สระว่ายน้ำ"></input>
                        <span className="fs-0-9-v">สระว่ายน้ำ</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="แม่บ้านทำความสะอาดห้องทุกเดือน"></input>
                        <span className="fs-0-9-v">แม่บ้านทำความสะอาดห้องทุกเดือน</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="อนุญาตให้เลี้ยงสัตว์"></input>
                        <span className="fs-0-9-v">อนุญาตให้เลี้ยงสัตว์</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default conveninetOut_panel;