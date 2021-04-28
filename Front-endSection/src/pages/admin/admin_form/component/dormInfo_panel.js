import React, { useState } from 'react';
import '../admin_form.css';
import './../../../../App.css';

function dorm_panel() {
    return (
        <div className="dorm_info card">
            <div className="card-header">ข้อมูลที่พัก</div>
            <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-end">
                    <p className="text_label">ชื่อที่พัก</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">ชื่อที่พัก (ภาษาอังกฤษ)</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">ประเภทห้องพัก</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">เลขที่</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">ซอย</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">ถนน</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">จังหวัด</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">อำเภอ/เขต</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">ตำบล/แขวง</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">รหัสไปรษณีย์</p>
                    <input className="input_panel" />
                </div>
            </div>
        </div>
    );
}
export default dorm_panel;