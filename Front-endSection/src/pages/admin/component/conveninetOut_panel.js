import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function conveninetOut_panel() {
    return (
        <div className="card">
            <div className="card-header">สิ่งอำนวยความสะดวก
                              <p className="m-0 color-second">(ส่วนกลาง)</p>
            </div>
            <div className="d-flex justify-content-around">
                <div className="col1 px-3">
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">ที่จอดรถ</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">ระบบ Keycard</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">กล้องวงจรปิด (CCTV)</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">เครื่องซักผ้า</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">ไมโครเวฟ</p>
                    </div>
                </div>

                <div className="col2 px-3">
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">ตู้น้ำหยอดเหรียญ</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">อินเทอร์เน็ตภายในอาคาร</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">ลิฟท์</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">สระว่ายน้ำ</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">แม่บ้านทำความสะอาดห้องทุกเดือน</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">อนุญาตให้เลี้ยงสัตว์</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default conveninetOut_panel;